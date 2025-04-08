import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../../components/api/apiClients";
import { apiRouters } from "../../../components/api/apiRouters";
import { toast } from "react-toastify";

const CourseListPage = () => {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newCourse, setNewCourse] = useState({
        courseName: "",
        courseDescription: "",
        courseNumbers: "",
        difficulties: "easy"
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await apiClient.get(apiRouters.getAllCourse);
            setCourses(response.data);
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
                await apiClient.delete(`${apiRouters.getAllCourse}/${id}`);
                setCourses(courses.filter((course) => course.id !== id));
                toast.success("Course deleted successfully");
            } catch (error) {
                console.error("Error deleting course:", error);
                toast.error("Failed to delete course");
            }
        }
    };

    const handleAddCourseChange = (e) => {
        setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
    };

    const handleAddCourseSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiClient.post(apiRouters.addCourse, newCourse);
            toast.success("Course added successfully!");
            setShowModal(false);
            setNewCourse({
                courseName: "",
                courseDescription: "",
                courseNumbers: "",
                difficulties: "easy"
            });
            fetchCourses();
        } catch (error) {
            toast.error("Failed to add course");
            console.error("Add course error:", error);
        }
    };

    return (
        <div className="container margin-adjust">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="admin-head">Course List</h2>
                <button className="btn btn-success" onClick={() => setShowModal(true)}>
                    Add Course
                </button>
            </div>

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
                                <button className="btn btn-primary me-2" onClick={() => handleEdit(course.id)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(course.id)}>
                                    Delete
                                </button>
                                <button className="btn btn-warning ms-2" onClick={() => navigate(`/courseAdminProblemTopicsList/${course.id}`)}>
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <div
                    className="modal show fade d-block"
                    tabIndex="-1"
                    role="dialog"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 1055,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <form onSubmit={handleAddCourseSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Course</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Course Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="courseName"
                                            value={newCourse.courseName}
                                            onChange={handleAddCourseChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course Description</label>
                                        <textarea
                                            className="form-control"
                                            name="courseDescription"
                                            value={newCourse.courseDescription}
                                            onChange={handleAddCourseChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Course Numbers</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="courseNumbers"
                                            value={newCourse.courseNumbers}
                                            onChange={handleAddCourseChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Difficulty</label>
                                        <select
                                            className="form-control"
                                            name="difficulties"
                                            value={newCourse.difficulties}
                                            onChange={handleAddCourseChange}
                                            required
                                        >
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Add Course
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseListPage;
