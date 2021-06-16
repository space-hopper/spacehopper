import React from 'react';

import Navbar from './components/Navbar';
import Routes from './Routes';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
