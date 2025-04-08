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
        const topics = Array.isArray(response.data) ? response.data : [response.data];
        setTopics(topics);
      } else {
        setTopics([]);
      }
    } catch (error) {
      console.error('Error fetching topics:', error);
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
        courseId: slug,
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
    <div style={{ padding: '20px' }} className='margin-adjust'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
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
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1050
            }}
          ></div>

          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1060,
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              width: '500px',
              maxWidth: '90%'
            }}
          >
            <div style={{ padding: '20px', borderBottom: '1px solid #dee2e6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h5 className="modal-title">Add Problem Topic</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div style={{ padding: '20px' }}>
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
            <div style={{ padding: '20px', borderTop: '1px solid #dee2e6', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
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
        </>
      )}
    </div>
  );
};

export default AdminProblemTopicsList;
