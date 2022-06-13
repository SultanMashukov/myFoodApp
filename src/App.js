import 'App.scss';
import MainMenu from 'components/MainMenu';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from 'pages/CatalogPage';
import BasketPage from 'pages/BasketPage';
import PersonalPage from 'pages/PersonalPage';
import ModalWindow from 'components/ModalWindow';
import LoaderSpinner from 'components/LoaderSpinner'
import { useState } from 'react';
import OrdersPage from 'pages/OrdersPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

function App() {
  //const [modalActive,  setModalActive] = useState(true)

  return (
    <div className="app-wrapper">
        <div className="content-frame">
            
            <Routes>
                <Route path='/' element={<CatalogPage/>}/>
                <Route path='/catalog/' element={<CatalogPage/>}/>
                <Route path='/catalog/:category' element={<CatalogPage/>}/>
                <Route path='/personal' element={<PersonalPage/>}/>
                <Route path='/personal/orders' element={<OrdersPage/>}/>
                <Route path='/basket' element={<BasketPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/registration' element={<RegistrationPage/>}/>
            </Routes>
        </div>
        <div className="command-frame">
            {/* <ModalWindow active={modalActive} setActive={setModalActive}>
              hello
            </ModalWindow> */}
            <MainMenu/>
        </div>
    </div>
  );
}

export default App;
