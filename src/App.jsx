import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { routeConfig } from './RouteConfig';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import RouteProtected from './context/RouteProtected';
import ErrorPage from './components/errorPage/ErrorPage';




function App() {
  return (
    <BrowserRouter>
      
     
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

     

    </BrowserRouter>
  );
}

export default App;
