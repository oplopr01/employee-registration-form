import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, route } from 'react-router-dom' 

const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Home/>
    <Routes>
        
    </Routes>
    
    </BrowserRouter>

  </div>
    )

}

export default App