import React, { useEffect, useState } from "react";
import apiClient from "../../../components/api/apiClients";
import { apiRouters } from "../../../components/api/apiRouters";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const CourseListEdit = () => {
  const [course, setCourse] = useState({});

  const {slug} = useParams()
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const res = await apiClient.get(apiRouters.getCourse(slug));
            setCourse(res.data);
            console.log(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    fetchData();
  },[])

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const response = await apiClient.put(apiRouters.updateCourse(slug),course);
        if(response){
            toast.success("Course Updated Successfully");
        }
    }catch(e){
        toast.error("Error to Update the Course")
    }
    console.log("Updated Course:", course);
  };

  return (
    <div className="container mb-5 margin-adjust">
      <h2 className="admin-head">Edit Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            name="courseName"
            value={course.courseName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Course Description</label>
          <textarea
            className="form-control"
            name="courseDescription"
            value={course.courseDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Course Number</label>
          <input
            type="number"
            className="form-control"
            name="courseNumbers"
            value={course.courseNumbers}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Difficulty</label>
          <select
            className="form-control"
            name="difficulties"
            value={course.difficulties}
            onChange={handleChange}
            required
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Update Course
        </button>
      </form>
    </div>
  );
};

export default CourseListEdit;
