import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';

const Course = () => {
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
                    {problems.map((problem) => (
                        <div className="problem-card d-flex align-items-center justify-content-between p-4 border rounded shadow-sm mb-3" key={problem.id}>
                            <div className="problem-info">
                                <h5 className="problem-title">{problem.title}</h5>
                                <span className={`difficulty px-2 py-1 rounded ${getDifficultyClass(problem.difficulty)}`}>
                                    {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                                </span>
                            </div>
                            <Link to={'/problem'}>
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
