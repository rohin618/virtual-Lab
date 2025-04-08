import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../../components/api/apiClients';
import { apiRouters } from '../../../components/api/apiRouters';
import { toast } from 'react-toastify';

const AdminProblemSets = () => {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [problemSets, setProblemSets] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        problems: '',
        difficulties: '',
    });

    useEffect(() => {
        fetchProblemSets();
    }, []);

    const fetchProblemSets = async () => {
        try {
            const response = await apiClient.get(apiRouters.getProblemSets(slug));
            const sets = Array.isArray(response.data) ? response.data : [response.data];
            setProblemSets(sets);
        } catch (error) {
            console.error('Error fetching problem sets:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/problemSetEdit/${id}`);
    };

    const handleView = (id) => {
        navigate(`/courseAdminProblems/${id}`);
    };

    const handleAddProblemSet = async () => {
        try {
            await apiClient.post(apiRouters.addProblemSet, { ...formData, problemTopicsId: slug });
            toast.success('Problem set added');
            setFormData({ problems: '', difficulties: '' });
            setShowModal(false);
            fetchProblemSets();
        } catch (error) {
            console.error('Error adding problem set:', error);
            toast.error('Failed to add problem set');
        }
    };

    return (
        <div className="container margin-adjust">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2>Problem Sets</h2>
                <button className="btn btn-success" onClick={() => setShowModal(true)}>
                    Add Problem Set
                </button>
            </div>

            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Problems</th>
                        <th>Difficulties</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {problemSets.length > 0 ? (
                        problemSets.map((set) => (
                            <tr key={set.id}>
                                <td>{set.id}</td>
                                <td>{set.problems}</td>
                                <td>{set.difficulties}</td>
                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => handleEdit(set.id)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-secondary" onClick={() => handleView(set.id)}>
                                        View Problems
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No problem sets found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal */}
            {showModal && (
                <>
                    {/* Bootstrap backdrop */}
                    <div className="modal-backdrop fade show"></div>

                    {/* Bootstrap modal */}
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        style={{ zIndex: 1055 }}
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Problem Set</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label className="form-label">Problems</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={formData.problems}
                                            onChange={(e) =>
                                                setFormData({ ...formData, problems: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Difficulty</label>
                                        <select
                                            className="form-select"
                                            value={formData.difficulties}
                                            onChange={(e) =>
                                                setFormData({ ...formData, difficulties: e.target.value })
                                            }
                                        >
                                            <option value="">Select difficulty</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary" onClick={handleAddProblemSet}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
};

export default AdminProblemSets;
