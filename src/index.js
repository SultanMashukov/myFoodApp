import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LoaderSpinner from './components/common/LoaderSpinner/LoaderSpinner';

const App = React.lazy(() => import('./components/App/App'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<LoaderSpinner/>}>
      <App/>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
