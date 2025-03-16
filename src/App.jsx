import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/homepage/index';
import SecuredComputingCourse from './pages/course';
import 'bootstrap/dist/css/bootstrap.min.css';


import Explore from './pages/explore'; // Ensure this is a default export

import './App.css';
import Login from './components/login/Login';
import { routeConfig } from './RouteConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import SignUp from './components/login/SignUp';
import { AuthProvider } from './context/AuthContext';
import RouteProtected from './context/RouteProtected';
import ErrorPage from './components/errorPage/ErrorPage';



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>

          {/* <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/explore" element={<Explore />} />

          <Route path="/course" element={<SecuredComputingCourse />} />
          <Route path="/login" element={<Login />} /> */}

          {routeConfig.map(({ path, component: Component, protected: isProtected, role }, index) => (
            <Route
              key={index}
              path={path}
              element={
                isProtected ? (
                  <RouteProtected role={role}>
                    <Component />
                  </RouteProtected>
                ) : (
                  <Component />
                )
              }
            />
          ))}

          <Route path='*' element={<ErrorPage/>}/>


        </Routes>
        <Footer />
        <ToastContainer />
      </AuthProvider>


    </BrowserRouter>
  );
}

export default App;
