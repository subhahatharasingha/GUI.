import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Application.css';

const Application = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); 
  };

  return (
    <div className="application-container">
      <h1>Adoption Application</h1>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Phone:
          <input type="tel" placeholder="Enter your phone number" required />
        </label>
        <label>
          Address:
          <textarea placeholder="Enter your address" required></textarea>
        </label>
        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Application;
