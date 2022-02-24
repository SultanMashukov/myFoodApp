import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoaderSpinner from './components/common/LoaderSpinner/LoaderSpinner';
import { Provider,  } from 'react-redux';
import store from './store/rootReduser';
import './css/index.css'

const App = React.lazy(() => import('./components/App/App'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
         <Suspense fallback={<LoaderSpinner/>}>
          <App/>
        </Suspense> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
