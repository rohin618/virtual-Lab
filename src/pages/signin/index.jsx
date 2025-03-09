// SignInPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isStudent, setIsStudent] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in attempt with:', { email, password, role: isStudent ? 'student' : 'faculty' });
    // Add your authentication logic here
  };

  const handleCreateAccount = () => {
    // Redirect to different signup pages based on selected role
    if (isStudent) {
      navigate('/signup/student');
    } else {
      navigate('/signup/faculty');
    }
  };

  return (
    <div className="signin-container">
      <div className="left-panel">
        <div className="branding">
          <div className="logo">
            <div className="logo-icon"></div>
            <h1>EduConnect</h1>
          </div>
          <p className="tagline">Where knowledge meets opportunity</p>
        </div>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon student-icon"></div>
            <div className="feature-text">
              <h3>For Students</h3>
              <p>Access course materials, submit assignments, and track your progress</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-icon faculty-icon"></div>
            <div className="feature-text">
              <h3>For Faculty</h3>
              <p>Manage courses, grade assignments, and connect with students</p>
            </div>
          </div>
          
          <div className="feature">
            <div className="feature-icon community-icon"></div>
            <div className="feature-text">
              <h3>Community</h3>
              <p>Join discussion forums and collaborate on projects</p>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <p>"EduConnect transformed how I manage my courses!"</p>
          <span>— Prof. Johnson, Computer Science</span>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="form-container">
          <div className="form-header">
            <h2>Welcome Back</h2>
            <p>Sign in to continue your learning journey</p>
          </div>
          
          <div className="role-toggle">
            <button 
              className={`toggle-btn ${isStudent ? 'active' : ''}`}
              onClick={() => setIsStudent(true)}
            >
              Student
            </button>
            <button 
              className={`toggle-btn ${!isStudent ? 'active' : ''}`}
              onClick={() => setIsStudent(false)}
            >
              Faculty
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-container">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@university.edu"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <a href="/forgot-password" className="forgot-link">Forgot password?</a>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="signin-btn">
              Sign In
            </button>
          </form>
          
          <div className="divider">
            <span>OR</span>
          </div>
          
          <div className="social-signin">
            <button className="google-btn">
              <div className="btn-icon google-icon"></div>
              Sign in with Google
            </button>
            <button className="microsoft-btn">
              <div className="btn-icon microsoft-icon"></div>
              Sign in with Microsoft
            </button>
          </div>
          
          <div className="signup-prompt">
            <p>
              Don't have an account? 
              <button 
                onClick={handleCreateAccount} 
                className="create-account-btn"
              >
                Create Account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;