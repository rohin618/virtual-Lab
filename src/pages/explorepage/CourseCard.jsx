import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CourseCard = () => {
  const navigate = useNavigate()

  return (
    <div className="course-card card shadow-sm mb-4" style={{ width: '18rem' }}>
      <div className="course-header card-body">
        <h5 className="card-title">Data Structures and Algorithms</h5>
      </div>
      <hr />
      <div className="course-body">
        <p className="course-description">
          Master the essential data structures and algorithms, including arrays, linked lists, stacks, queues, trees, sorting, searching, and more.
        </p>

        <div className="card-meta d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <i className="far fa-clock me-2"></i>
            <span className="meta-text">20 hours</span>
            <span className="meta-separator mx-2">•</span>
            <i className="fas fa-book me-2"></i>
            <span className="meta-text">15 modules</span>
          </div>
        </div>

        <div className="card-ratings d-flex justify-content-between align-items-center mb-3">
          <div className="stars">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <span className="rating-value ms-2">(4.8)</span>
          </div>
          <div className="students-count">
            <span className="students-count-value">3,652</span> students
          </div>
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="difficulty">
            Difficulty: <span className="difficulty-level badge bg-warning text-dark">Intermediate</span>
          </div>
          <Link to={'/courseDescription'}>
            <button
              className="enroll-button btn btn-primary"
              onClick={() => {
                navigate('/courseDescription')
              }}
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
