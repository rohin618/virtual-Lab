import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiClient from '../../../components/api/apiClients';
import { apiRouters } from '../../../components/api/apiRouters';
import { toast } from 'react-toastify';

const AdminProblemTopicOverview = () => {
  const { slug } = useParams();
  const [overview, setOverview] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    problemOverviewTitle: '',
    problemOverviewDes: ''
  });

  const navigate = useNavigate();
  useEffect(() => {
    fetchOverview();
  }, [slug]);

  const fetchOverview = async () => {
    try {
      const response = await apiClient.get(apiRouters.getTopicOverviewBySlug(slug));
      setOverview(response.data);
    } catch (error) {
      console.error('Error fetching overview:', error);
      toast.error('Failed to load overview');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await apiClient.post(apiRouters.addTopicOverview, {
        ...formData,
        problemTopicsId:Number(slug),
      });
      toast.success('Overview added successfully');
      setShowModal(false);
      setFormData({ problemOverviewTitle: '', problemOverviewDes: '' });
      fetchOverview();
    } catch (error) {
      console.error('Error adding overview:', error);
      toast.error('Failed to add overview');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Problem Topic Overview</h2>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add to Problem Topic Overview
        </button>
        <button className="btn btn-warning" onClick={() =>{navigate(`/courseAdminProblemSets/${slug}`)}}>
          Add the problemsets
        </button>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>S.no</th>
            <th>problemOverviewTitle</th>
            <th>problemOverviewDes</th>
          </tr>
        </thead>
        <tbody>
          {overview.length > 0 ? (
            overview.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.problemOverviewTitle}</td>
                <td>{item.problemOverviewDes}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No overview data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Overview</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="problemOverviewTitle"
                    value={formData.problemOverviewTitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="problemOverviewDes"
                    value={formData.problemOverviewDes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
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

export default AdminProblemTopicOverview;
