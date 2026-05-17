import React from 'react';
import Home from './home/home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/courses";// Import SignUp as a named export
import { SignUp } from './components/signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authprovider';
function App() {
  const [authuser,setauthuser]=useAuth()
  console.log(authuser)
 
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authuser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/Signup" element={<SignUp />} /> {/* Define the SignUp route */}
      </Routes>
      <Toaster position="top-center" />


      </div>
    </>
  );
}

export default App;
