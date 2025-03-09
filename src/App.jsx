<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage'
import Login from './components/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/homepage/index';
import SecuredComputingCourse from './pages/course';

//import HomePage from './pages/homepage'; // Ensure this is a default export
import SignIn from './pages/signin'; // Ensure this is a default export
import Explore from './pages/explore'; // Ensure this is a default export

import './App.css';
>>>>>>> 37fc568 (required frontend design)



function App() {
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
=======
    <BrowserRouter>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Sign In Page Route */}
        <Route path="/signin" element={<SignIn />} />

        {/* Explore Page Route */}
        <Route path="/explore" element={<Explore />} />
        
        <Route path="/course" element={<SecuredComputingCourse />} />

       
      </Routes>

      {/* Add Enroll Button (Optional: Place it where needed in the UI) */}
      
    </BrowserRouter>
  );
>>>>>>> 37fc568 (required frontend design)
}

export default App;
