import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './explore.css';

const LeetCodeStylePage = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="page-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-brand">VIRTUAL LAB</div>
          <div className="navbar-nav">
            <a href="#" className="nav-link">Explore</a>
            <a href="#" className="nav-link">Problems</a>
            <a href="#" className="nav-link active">Courses</a>
            <a href="#" className="nav-link">Contest</a>
            <a href="#" className="nav-link">Discuss</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="icon-button">
            <i className="fas fa-search"></i>
          </button>
          <div className="avatar">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div>
          <h1 className="page-title">Courses</h1>
          <p className="page-subtitle">Master new skills with in-depth learning experiences</p>
        </div>

        {/* Course Card Grid */}
        <div className="course-grid">
          {/* Secured Computing Course Card */}
          <div className="course-card">
            <div className="card-color-strip blue-strip"></div>
            <div className="card-body">
              <h2 className="card-title">Secured Computing</h2>
              <p className="card-text">
                Learn essential concepts and techniques in cybersecurity, encryption, network security, and secure software development.
              </p>
              
              <div className="card-meta">
                <i className="far fa-clock"></i>
                <span className="meta-text"> 12 hours</span>
                <span className="meta-separator">•</span>
                <span className="meta-text">8 modules</span>
              </div>
              
              <div className="card-ratings">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <span className="rating-value">(4.9)</span>
                </div>
                <div className="students-count">
                  <span className="students-count-value">2,451</span> students
                </div>
              </div>
              
              <div className="card-footer">
                <div className="difficulty">
                  Difficulty: <span className="difficulty-level difficulty-intermediate">Intermediate</span>
                </div>
                <button 
                  className="enroll-button" 
                  onClick={() => navigate('/course')}>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Data Structures Course Card (Inactive) */}
          <div className="course-card course-card-inactive">
            <div className="card-color-strip green-strip"></div>
            <div className="card-body">
              <h2 className="card-title">Data Structures</h2>
              <p className="card-text">
                Master essential data structures and algorithms for coding interviews and software development.
              </p>
              
              <div className="card-meta">
                <i className="far fa-clock"></i>
                <span className="meta-text"> 16 hours</span>
                <span className="meta-separator">•</span>
                <span className="meta-text">10 modules</span>
              </div>
              
              <div className="card-ratings">
                <div className="stars">
                  {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                  <i className="far fa-star"></i>
                  <span className="rating-value">(4.8)</span>
                </div>
                <div className="students-count">
                  <span className="students-count-value">4,210</span> students
                </div>
              </div>
              
              <div className="card-footer">
                <div className="difficulty">
                  Difficulty: <span className="difficulty-level difficulty-beginner">Beginner</span>
                </div>
                <button className="coming-soon-button">Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">CodeCamp</h3>
              <p className="footer-text">
                Build skills, solve challenges, and become a better developer.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Learn</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Problems</a></li>
                <li><a href="#" className="footer-link">Courses</a></li>
                <li><a href="#" className="footer-link">Interview Prep</a></li>
                <li><a href="#" className="footer-link">Contests</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Community</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">Discuss</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Mentors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-list">
                <li><a href="#" className="footer-link">FAQ</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            © 2025 CodeCamp. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LeetCodeStylePage;
