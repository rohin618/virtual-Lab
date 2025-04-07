import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiClient from '../../../components/api/apiClients';
import { apiRouters } from '../../../components/api/apiRouters';
import { toast } from 'react-toastify';

const AdminProblemTopicsList = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    courseTitle: '',
    courseDescription: ''
  });

  useEffect(() => {
    fetchTopics();
  }, [slug]);

  const fetchTopics = async () => {
    try {
      const response = await apiClient.get(apiRouters.getProblemTopicsByCourseId(slug));
      if (response.data) {
        const topics = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setTopics(topics);
      } else {
        setTopics([]);
      }
      toast.success('Topics loaded successfully');
    } catch (error) {
      console.error('Error fetching topics:', error);
      toast.error('Failed to load topics');
    }
  };

  const handleEdit = (topicId) => {
    navigate(`/admin/problemTopicEdit/${topicId}`);
  };

  const handleView = (topicId) => {
    navigate(`/courseAdminProblemTopicsOverview/${topicId}`);
  };

  const handleAddTopic = async () => {
    try {
      await apiClient.post(apiRouters.addProblemTopic, {
        ...formData,
        course:slug,
      });
      toast.success('Problem topic added');
      setShowModal(false);
      setFormData({ courseTitle: '', courseDescription: '' });
      fetchTopics();
    } catch (error) {
      console.error('Error adding topic:', error);
      toast.error('Failed to add topic');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Problem Topics</h2>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Problem Topic
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Course Title</th>
            <th>Course Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {topics.length > 0 ? (
            topics.map((topic) => (
              <tr key={topic.id}>
                <td>{topic.id}</td>
                <td>{topic.courseTitle}</td>
                <td>{topic.courseDescription}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(topic.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleView(topic.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No topics found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Problem Topic</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Course Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courseTitle"
                    value={formData.courseTitle}
                    onChange={(e) =>
                      setFormData({ ...formData, courseTitle: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Course Description</label>
                  <textarea
                    className="form-control"
                    name="courseDescription"
                    value={formData.courseDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, courseDescription: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleAddTopic}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProblemTopicsList;
