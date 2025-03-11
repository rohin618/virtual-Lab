import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/homepage/index';
import SecuredComputingCourse from './pages/course';

//import HomePage from './pages/homepage'; // Ensure this is a default export
import SignIn from './pages/signin'; // Ensure this is a default export
import Explore from './pages/explore'; // Ensure this is a default export

import './App.css';



function App() {
  return (
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
}

export default App;
