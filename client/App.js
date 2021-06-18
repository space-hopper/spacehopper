import React from 'react';

import Cart from './components/Cart';
import Routes from './Routes';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Cart />
      <Routes />
    </div>
  );
};

export default App;
