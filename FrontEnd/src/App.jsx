import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expenses from "./pages/Dashboard/Expenses";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<Root />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/dashboard' element = {<Home />} />
          <Route path='/income' element = {<Income />} />
          <Route path='/expenses' element = {<Expenses />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App


const Root = () => {
  // Check if token exist in Local Storage

  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login"

  return isAuthenticated ? ( <Navigate to = "/dashboard" /> ) : ( <Navigate to = "/login" /> );
};