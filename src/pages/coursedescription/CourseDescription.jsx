import React, { useEffect, useState } from 'react'
import './courseDescription.css'
import { Link, useParams } from 'react-router-dom';
import apiClient from '../../components/api/apiClients';
import { apiRouters } from '../../components/api/apiRouters';

const CourseDescription = () => {
    const courseTitle = "Mastering Data Structures and Algorithms";
    const courseDescription = "This course will teach you the core concepts of data structures and algorithms, helping you solve complex problems in computer science, including Arrays, Linked Lists, Trees, Graphs, and more.";
    const [problemTopic,setProblemTopic] = useState([]);
    const [problemTopicOvr,setProblemTopicOvt] = useState([]);

    const {slug} = useParams();

    useEffect(()=>{
        fetchData();
        fetchProblemOverview();
    },[])
    const fetchData = async ()=>{
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
        try{
            const res = await apiClient.get(apiRouters.getTopicOverviewBySlug(id));
            if(res.data){
                setProblemTopicOvt(res.data);
            }
        }catch(e){
            console.log(e);
        }
    }
    const topics = [
        { name: "Introduction to Arrays", description: "Learn about arrays, one of the most fundamental data structures.", number: 1 },
        { name: "Linked Lists", description: "Understand linked lists and their variations like singly and doubly linked lists.", number: 2 },
        { name: "Stacks and Queues", description: "Learn about stack and queue operations and their practical applications.", number: 3 },
        { name: "Trees", description: "Dive into tree structures like binary trees, BSTs, and tree traversals.", number: 4 },
        { name: "Graphs", description: "Explore graphs and their algorithms like BFS, DFS, and shortest path algorithms.", number: 5 },
        { name: "Hashing", description: "Learn about hash tables and how hashing is used to solve common problems.", number: 6 },
        { name: "Sorting Algorithms", description: "Understand and implement sorting algorithms like quicksort, mergesort, and bubblesort.", number: 7 },
        { name: "Dynamic Programming", description: "Learn the principles of dynamic programming and how to solve optimization problems.", number: 8 }
    ];

    return (
        <div className="container mt-5">
            <div className="course-header">
                <h1>{problemTopic.courseTitle}</h1>
                <p>{problemTopic.courseDescription}</p>
                <div className='text-center py-2'>
                    <Link to={`/problemSets/${problemTopic.id}`}>
                        <button className='btn btn-primary'>
                            Enroll to Problems
                        </button>
                    </Link>
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

            <div className='text-center py-5'>
                <button className='btn btn-primary'>
                    Enroll to Problems
                </button>
            </div>
        </div>
    );
}

export default CourseDescription
