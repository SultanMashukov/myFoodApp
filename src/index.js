import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider,  } from 'react-redux';
import LoaderSpinner from 'components/LoaderSpinner';
import store from 'store/rootReduser';
import 'assets/css/all.min.css'
import 'assets/css/index.css'

const App = React.lazy(() => import('App'));

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
