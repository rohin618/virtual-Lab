import { BrowserRouter, Route, Routes, useLocation  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { routeConfig } from './RouteConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import RouteProtected from './context/RouteProtected';
import ErrorPage from './components/errorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCourses } from './redux/slice/CourseSlice';




function App() {

  const location = useLocation();
  const isRoot = location.pathname === '/';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses()); 
  }, [dispatch]);


  return (

      
     
       <>
       <div  style={{ backgroundColor: isRoot ? '#0a0e17' : 'initial' }}>
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
       </div>
       </>

     


  );
}

export default App;
