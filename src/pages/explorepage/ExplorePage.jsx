import React, { useEffect, useState } from 'react';
import './Explore.css';
import CourseCard from './CourseCard';
import apiClient from '../../components/api/apiClients';
import { apiRouters } from '../../components/api/apiRouters';

const ExplorePage = () => {
  const mapUsage = [1,2,3,4,5];
    const [course,setCourse] = useState([]);

    useEffect(()=>{
      fetchData();
    },[]);
  
      const fetchData = async ()=>{
          try{
              const res = await apiClient.get(apiRouters.getAllCourse);
              setCourse(res.data);
          }catch(e){
              console.log(e);
          }
      }
  return (
    <div>
      <section className='course_sec'>
        <div className='course_outer'>
          {
            course.map((data)=><CourseCard data={data}/>)
          }
        </div>
      </section>
    </div>
  )
}

export default ExplorePage
