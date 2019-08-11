import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main />
    </BrowserRouter>
  )
}

export default App;
