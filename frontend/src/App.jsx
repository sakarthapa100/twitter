
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route and Routes from react-router-dom

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/auth/login/LoginPage'
import SignupPage from './pages/auth/signup/SignupPage';
import Profile from './pages/components/Profile'



function App() {
  return (
   <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/profile' element={<Profile />} />

    </Routes>
 
   </BrowserRouter>
 
  );
}

export default App;
