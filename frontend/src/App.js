import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer
        autoClose={false}
        bodyClassName="toast"
        position="top-center"
      />
    </>
  );
}

export default App;
