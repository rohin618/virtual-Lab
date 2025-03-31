import React, { useState } from 'react';
import apiClient from '../api/apiClients';
import { apiRouters } from '../api/apiRouters';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {login} = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();


    try{
      const response = await apiClient.post(apiRouters.login,{userName:username,password:password});
      console.log(response.data);
      if(response.status === 401){
        toast.error(response.data);
      }else{
        toast.success("Successfully Sign In");
        login(response.data.token,response.data.role);
        navigate('/')

      }
    }
    catch(e){
      console.log(e);
      toast.error("Error to Login")
    }
  };





  return (
    <>

      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="col-12 col-md-6 col-lg-4">
          <form onSubmit={handleLogin} className="bg-white p-4 rounded shadow">
            
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">LogIn</h2>
              <p className="text-muted">Please LogIn to Continue.</p>
            </div>
            
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
             
            </div>
            
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
              <a href="#" className="text-primary text-decoration-none small float-end mt-1">
                Forgot Password?
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-muted small">
                Don't have an account?{' '}
                <Link to={'/signup'} className="text-primary text-decoration-none">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;