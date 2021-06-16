import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import Products from '../client/components/Products'

const App = () => {
  return (
    <div>
      <Products />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
