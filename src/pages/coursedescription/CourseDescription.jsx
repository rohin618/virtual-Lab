import React, { useEffect, useState } from 'react'
import './courseDescription.css'
import { Link, useParams } from 'react-router-dom';
import apiClient from '../../components/api/apiClients';
import { apiRouters } from '../../components/api/apiRouters';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const CourseDescription = () => {
    const courseTitle = "Mastering Data Structures and Algorithms";
    const courseDescription = "This course will teach you the core concepts of data structures and algorithms, helping you solve complex problems in computer science, including Arrays, Linked Lists, Trees, Graphs, and more.";
    const [problemTopic,setProblemTopic] = useState([]);
    const [problemTopicOvr,setProblemTopicOvt] = useState([]);
    const [enrollModel,setEnrollModel] = useState(false);
    const [view,setView] = useState(false);

    const coursesListIds = useSelector((state) => state.courses.courses);
    const status = useSelector((state) => state.courses.status);

    const {slug} = useParams();

  

    useEffect(()=>{
        fetchData();
    },[])


    useEffect(()=>{
        checkEnrollments();
    },[coursesListIds,slug])


    const checkEnrollments = ()=>{
        coursesListIds.map((obj)=>{
            if(obj.courseId == slug){
                setView(true);
            }
        })
    }


    const fetchData = async ()=>{
        if(slug == undefined || null) return;
        try{
            const res = await apiClient.get(apiRouters.getProblemTopicsByCourseId(slug));
            if(res.data){
                setProblemTopic(res.data);
                fetchProblemOverview(res.data.id);
            }

        }catch(e){
            console.log(e);
        }
    }

    const fetchProblemOverview = async (id)=>{
        if(id == undefined && id == null) return;
        try{
            const res = await apiClient.get(apiRouters.getTopicOverviewBySlug(id));
            if(res.data){
                setProblemTopicOvt(res.data);
            }
        }catch(e){
            console.log(e);
        }
    }

    const handleConfirm = async ()=>{
        try{
            const res = apiClient.post(apiRouters.enrollConfirm(slug));
            if(res){
                toast.success("You Successfully Enrolled this Course");
                setEnrollModel(false);
                setView(true);
            }
        }catch(e){
            toast.error("Error to Enrolled this course");
        }
    }

    return (
        <div className="container mt-5">
            <div className="course-header">
                <h1>{problemTopic.courseTitle}</h1>
                <p>{problemTopic.courseDescription}</p>
                <div className='text-center py-2'>
                    {view ? <Link to={`/problemSets/${problemTopic.id}`}>
                        <button className='btn btn-primary'>
                            view  Problems
                        </button>
                    </Link> : <button className='btn btn-primary' onClick={()=>setEnrollModel(true)}>
                            Enroll this Course
                        </button>}
                </div>
            </div>
            <div className="topics-list">
                {problemTopicOvr.map((topic, index) => (
                    <div className="row topic-item" key={index}>
                        <div className="col-md-8">
                            <h5>{topic.problemOverviewTitle}</h5>
                            <p>{topic.problemOverviewDes}</p>
                        </div>
                        <div className="col-md-4 text-end">
                            <span className="topic-number">{index+1}</span>
                        </div>
                    </div>
                ))}
            </div>


            {
                enrollModel && <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content p-4 text-center shadow rounded-4">
                    <div className="modal-body">
                      <h5 className="mb-4">Are you confirm to Enroll this Course</h5>
                      
                      <div className="d-flex justify-content-center gap-3">
                        <button type="button" className="btn btn-primary px-4" onClick={handleConfirm}>
                          Confirm
                        </button>
                        <button type="button" className="btn btn-outline-secondary px-4" onClick={()=>{setEnrollModel(false)}}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            }


        </div>
    );
}

export default CourseDescription
