import React, { useEffect, useState } from 'react';
import './Course.css';
import { Link, useParams } from 'react-router-dom';
import apiClient from '../../components/api/apiClients';
import { apiRouters } from '../../components/api/apiRouters';

const Course = () => {

    const {slug} = useParams();
    const [course,setCourse] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        try{
            const res = await apiClient.get(apiRouters.getProblemSets(slug));
            setCourse(res.data);
        }catch(e){
            console.log(e);
        }
    }


    const problems = [
        { id: 1, title: 'Inorder Traversal of a Binary Tree', difficulty: 'easy' },
        { id: 2, title: 'Find the Height of a Binary Tree', difficulty: 'medium' },
        { id: 3, title: 'Check if a Binary Tree is Balanced', difficulty: 'hard' },
    ];

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'easy';
            case 'medium':
                return 'medium';
            case 'hard':
                return 'hard';
            default:
                return '';
        }
    };

    return (
        <div className="container course-container mt-5">
            <div className="heading-section text-center">
                <h1 className="course-title mb-4">Data Structures: Tree</h1>
                <p className="course-description">
                    Learn essential concepts and techniques in tree data structures, including binary trees, traversals, and more. 
                    Gain hands-on experience with solving problems in tree-related algorithms.
                </p>
            </div>

            <hr className="my-4" />

            <div className="problem-set-section">
                <h2 className="text-center mb-4">Problem Sets</h2>

                <div className="vertical-cards">
                    {course.map((problem) => (
                        <div className="problem-card d-flex align-items-center justify-content-between p-4 border rounded shadow-sm mb-3" key={problem.id}>
                            <div className="problem-info">
                                <h5 className="problem-title">{problem.problems}</h5>
                                <span className={`difficulty px-2 py-1 rounded ${getDifficultyClass(problem.difficulties)}`}>
                                    {problem.difficulties.charAt(0).toUpperCase() + problem.difficulties.slice(1)}
                                </span>
                            </div>
                            <Link to={`/problem/${problem.id}`}>
                                <button className="btn btn-primary btn-sm">Try to Solve</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course;
