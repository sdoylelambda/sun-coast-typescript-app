import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/users/Login'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import UnderConstruction from './components/UnderConstruction'
import ForgotPassword from './components/users/ForgotPassword'
import NewUser from './components/users/NewUser'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/notfound' element={<NotFound />}/>
        <Route path='/ForgotPassword' element={<ForgotPassword />}/>
        <Route path='/NewUser' element={<NewUser />}/>
        <Route path='/privateroute' element={<PrivateRoute />}/>
        <Route path='/underconstruction' element={<UnderConstruction />}/>
      </Routes>
    </div>
  );
}

export default App;
