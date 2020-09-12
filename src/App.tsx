import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Home from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Home />
  </BrowserRouter>
);

export default App;
