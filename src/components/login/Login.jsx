import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Reset error
    
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Simple login logic (replace with actual authentication)
    if (username === 'demo' && password === 'password') {
      console.log('Login Successful');
      // Typically, you'd redirect or update app state here
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>

      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="col-12 col-md-6 col-lg-4">
          <form onSubmit={handleLogin} className="bg-white p-4 rounded shadow">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">Login</h2>
              <p className="text-muted">Welcome back! Please sign in.</p>
            </div>
            
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            
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
                Sign In
              </button>
              <a href="#" className="text-primary text-decoration-none small float-end mt-1">
                Forgot Password?
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-muted small">
                Don't have an account?{' '}
                <a href="#" className="text-primary text-decoration-none">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;