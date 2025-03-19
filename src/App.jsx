import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { routeConfig } from './RouteConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import RouteProtected from './context/RouteProtected';
import ErrorPage from './components/errorPage/ErrorPage';
import ExplorePage from './pages/explorepage/ExplorePage';
import Course from './pages/coursepage/Course';
import ProblemDetail from './pages/problemDetailPage/ProblemDetail';
import CourseDescription from './pages/coursedescription/CourseDescription';



function App() {
  return (
    <BrowserRouter>
      
      <AuthProvider>
        <Header />
        <div className='container'>
        <Routes>

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
        </div>
        <Footer />
        <ToastContainer />
      </AuthProvider>

     

    </BrowserRouter>
  );
}

export default App;
