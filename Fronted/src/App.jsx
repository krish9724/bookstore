import React from 'react';
import Home from './home/home';
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/courses";// Import SignUp as a named export
import { SignUp } from './components/signup';
function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/Signup" element={<SignUp />} /> {/* Define the SignUp route */}
      </Routes>
      </div>
    </>
  );
}

export default App;
