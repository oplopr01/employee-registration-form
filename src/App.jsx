import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import CreateUser from './Components/pages/CreateUser'
import Users from './Components/pages/Users'
import EditUser from './Components/pages/EditUser'

const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Home/>
    <Routes>
        <Route path="/create-user" element={<CreateUser/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/edit-user/:ID" element={<EditUser/>}></Route>
    </Routes>
    
    </BrowserRouter>

  </div>
    )

}

export default App