import 'App.scss';
import MainMenu from 'components/MainMenu';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from 'pages/CatalogPage';
import BasketPage from 'pages/BasketPage';
import PersonalPage from 'pages/PersonalPage';
import ModalWindow from 'components/ModalWindow';
import LoaderSpinner from 'components/LoaderSpinner'
import { useEffect, useState } from 'react';
import OrdersPage from 'pages/OrdersPage';
import SignIn from 'pages/SignInPage';
import SignUp from 'pages/SignUpPage';
import PrivateRoute from 'HOC/PrivateRoute';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'store/slices/sliceUser';

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
                    <Route path='/' element={<CatalogPage />} />
                    <Route path='/catalog/' element={<CatalogPage />} />
                    <Route path='/catalog/:category' element={<CatalogPage />} />
                    <Route path='/personal' element={
                        <PrivateRoute>
                            <PersonalPage />
                        </PrivateRoute>} />
                    <Route path='/personal/orders' element={<OrdersPage />} />
                    <Route path='/basket' element={<BasketPage />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signin' element={<SignIn />} />
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
