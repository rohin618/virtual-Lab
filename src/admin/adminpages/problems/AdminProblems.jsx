import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../../../components/api/apiClients';
import { apiRouters } from '../../../components/api/apiRouters';
import { toast } from 'react-toastify';

const AdminProblems = () => {
  const { problemSetId } = useParams();
  const [problem, setProblem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    problemTitle: '',
    problemDescription: '',
    test1: '',
    output1: '',
    test2: '',
    output2: '',
  });

  useEffect(() => {
    fetchProblem();
  }, [problemSetId]);

  const fetchProblem = async () => {
    try {
      const response = await apiClient.get(apiRouters.getProblemByProblemSetId(problemSetId));
      if (response.data) {
        setProblem(response.data);
        setFormData(response.data);
        console.log(response.data);
      } else {
        setProblem(null);
      }
    } catch (error) {
      console.error('Error fetching problem:', error);
      setProblem(null);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (problem) {
        await apiClient.put(apiRouters.updateProblem, {
          ...formData,
          id: problem.id, // Include ID if backend needs it to identify the problem
          problemSetId: problemSetId,
        });
        toast.success('Problem updated successfully!');
      } else {
        await apiClient.post(apiRouters.addProblem, {
          ...formData,
          problemSetId: problemSetId,
        });
        toast.success('Problem added successfully!');
      }
      setShowModal(false);
      fetchProblem();
    } catch (error) {
      console.error('Error saving problem:', error);
      toast.error('Failed to save problem');
    }
  };

  const renderFormFields = () => (
    <>
      {[
        ['problemTitle', 'Problem Title'],
        ['problemDescription', 'Problem Description'],
        ['test1', 'Test 1'],
        ['output1', 'Output 1'],
        ['test2', 'Test 2'],
        ['output2', 'Output 2'],
      ].map(([name, label]) => (
        <div className="mb-3" key={name}>
          <label htmlFor={name} className="form-label">{label}</label>
          {name === 'problemDescription' ? (
            <textarea
              className="form-control"
              id={name}
              name={name}
              rows="4"
              value={formData[name]}
              onChange={handleChange}
            />
          ) : (
            <input
              type="text"
              className="form-control"
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
            />
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Problem Details</h2>

      {problem ? (
        <form>
          {renderFormFields()}
          <button type="button" className="btn btn-success" onClick={handleSubmit}>
            Save Changes
          </button>
        </form>
      ) : (
        <div className="text-center mt-4">
          <p>No problem found for this set.</p>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            Add Problem
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Problem</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form>{renderFormFields()}</form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Add Problem
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProblems;
