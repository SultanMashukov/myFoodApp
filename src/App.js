import './App.css';
import './css/all.min.css'
import MainMenu from './components/MainMenu/MainMenu';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from './components/CatalogPage/CatalogPage';
import BasketPage from './components/BasketPage/BasketPage';
import PersonalPage from './components/PersonalPage/PersonalPage';
import ModalWindow from './components/common/ModalWindow/ModalWindow';
import { useState } from 'react';

function App() {
  //const [modalActive,  setModalActive] = useState(true)

  return (
    <div className="app-wrapper">
        <div className="content-frame">
            
            <Routes>
                <Route path='/' element={<CatalogPage/>}/>
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
