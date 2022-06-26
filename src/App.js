import 'App.scss';
import MainMenu from 'components/MainMenu';
import { Route, Routes } from 'react-router-dom';
import ModalWindow from 'components/ModalWindow';
import LoaderSpinner from 'components/LoaderSpinner'
import { useEffect, useState } from 'react';
import PrivateRoute from 'HOC/PrivateRoute';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'store/slices/sliceUser';
import { publicRoutes, privateRoutes} from 'routes';

function App() {
    //const [modalActive,  setModalActive] = useState(true)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(checkAuth())
    },[])

    return (
        <div className="app-wrapper">
            <div className="content-frame">

                <Routes>
                    {
                        publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)
                    }
                    {
                        privateRoutes.map(route => {
                            return (
                                <Route key={route.path} path={route.path} element={
                                    <PrivateRoute>
                                        <route.component />
                                    </PrivateRoute>} />
                            )
                        })
                    }
                </Routes>
            </div>
            <div className="command-frame">
                {/* <ModalWindow active={modalActive} setActive={setModalActive}>
                    hello
                </ModalWindow> */}
                <MainMenu />
            </div>
        </div>
    );
}

export default App;
