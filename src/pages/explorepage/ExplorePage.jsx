import React from 'react';
import './Explore.css';
import CourseCard from './CourseCard';

const ExplorePage = () => {
  const mapUsage = [1,2,3,4,5];
  return (
    <div>
      <section className='course_sec'>
        <div className='course_outer'>
          {
            mapUsage.map(()=><CourseCard />)
          }
        </div>
      </section>
    </div>
  )
}

export default ExplorePage
