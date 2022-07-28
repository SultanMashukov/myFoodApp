import 'App.scss';
import MainMenu from 'components/MainMenu';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect} from 'react';
import PrivateRoute from 'HOC/PrivateRoute';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'store/slices/sliceUser';
import { publicRoutes, privateRoutes} from 'routes';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
    //const [modalActive,  setModalActive] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(()=>{
        dispatch(checkAuth()) //проверка авторизации
        if(!localStorage.getItem('notFirstEnter')){
            localStorage.setItem('notFirstEnter','yes');
            navigate('/about')
        }
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
                    <Route path='*' element={<NotFoundPage/>} />
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
