import 'App.scss';
import MainMenu from 'components/MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import BasketPage from 'pages/BasketPage/BasketPage';
import PersonalPage from 'pages/PersonalPage/PersonalPage';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import LoaderSpinner from 'components/LoaderSpinner/LoaderSpinner'
import { useState } from 'react';
// import Orders from '../pages/Orders/Orders';

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
                {/* <Route path='/personal/orders' element={<Orders/>}/> */}
                <Route path='/basket' element={<BasketPage/>}/>
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
