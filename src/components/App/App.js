import './App.scss';
import '../../css/all.min.css'
import MainMenu from '../MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import BasketPage from '../pages/BasketPage/BasketPage';
import PersonalPage from '../pages/PersonalPage/PersonalPage';
import ModalWindow from '../common/ModalWindow/ModalWindow';
import { useState } from 'react';

function App() {
  //const [modalActive,  setModalActive] = useState(true)

  return (
    <div className="app-wrapper">
        <div className="content-frame">
            
            <Routes>
                <Route path='/' element={<CatalogPage/>}/>
                <Route path='/:category' element={<CatalogPage/>}/>
                <Route path='/personal' element={<PersonalPage/>}/>
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
