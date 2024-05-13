import { useState } from 'react';
import Home from './pages/home/HomePage';
import './App.css';
import SignUpPage from './pages/auth/signup/SignupPage';

function App() {
  return (
    <div>
      {/* <Home /> */}
      <SignUpPage />
    </div>
  );
}

export default App;
