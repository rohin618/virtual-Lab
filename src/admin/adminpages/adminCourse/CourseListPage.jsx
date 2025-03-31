import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import apiClient from "../../../components/api/apiClients";
import { apiRouters } from "../../../components/api/apiRouters";

const CourseListPage = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const token = localStorage.getItem("Auth_token");
            const response = await apiClient.get(apiRouters.getAllCourse);
            setCourses(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/coursePageAdminEdit/${id}`);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            try {

                const res = await apiClient.delete(`${apiRouters.getAllCourse}/${id}`);
                setCourses(courses.filter((course) => course.id !== id));
            } catch (error) {
                console.error("Error deleting course:", error);
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Course List</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Numbers</th>
                        <th>Difficulty</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.courseName}</td>
                            <td>{course.courseDescription}</td>
                            <td>{course.courseNumbers}</td>
                            <td>{course.difficulties}</td>
                            <td>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => handleEdit(course.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(course.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseListPage;
