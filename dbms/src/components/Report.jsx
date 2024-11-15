/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function Report() {
  const [data, setData] = useState(null);  // Store fetched data
  const [error, setError] = useState(null);  // Error handling
  const [participantId, setParticipantId] = useState("");  // State for participant ID

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/generate`, {
        params: { participant_id: participantId },
      });
      
      setData(response.data);  // Set the data directly
      setError(null);  // Clear any previous errors
    } catch (err) {
      console.error(err);
      setError('Failed to generate report from the database.');
    }
  };
  

  // Function to display aggregated data
  const renderDetails = (label, content) => {
    return content ? (
      <div className="mb-4">
        <h3 className="text-lg font-bold">{label}</h3>
        <p>{content}</p>
      </div>
    ) : null;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Participant Report</h1>

      <div className="mb-4">
        {/* Input field for participant ID */}
        <label className="block mb-2 text-gray-700">Participant ID:</label>
        <input
          type="text"
          value={participantId}
          onChange={(e) => setParticipantId(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Enter Participant ID"
        />
      </div>

      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Generate Report
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Render Participant Data */}
      {data && (
        <div className="mt-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold">Participant Info</h3>
            <p><strong>Name:</strong> {data.participant_name}</p>
            <p><strong>Email:</strong> {data.participant_email}</p>
            <p><strong>Phone:</strong> {data.phone_no}</p>
            <p><strong>Address:</strong> {data.address}</p>
            <p><strong>Date of Birth:</strong> {data.date_of_birth}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <p><strong>Gender:</strong> {data.gender}</p>
          </div>

          {/* Display Enrollment & Program Details */}
          {renderDetails('Enrollment Details', data.enrollment_details)}
          {renderDetails('Program Details', data.program_details)}

          {/* Display Feedback Details */}
          {renderDetails('Feedback Details', data.feedback_details)}

          {/* Display Health Record Details */}
          {renderDetails('Health Record Details', data.health_record_details)}

          {/* Display Payment Details */}
          {renderDetails('Payment Details', data.payment_details)}

          {/* Display Session & Instructor Details */}
          {renderDetails('Session and Instructor Details', data.session_instructor_details)}
        </div>
      )}
    </div>
  );
}

export default Report;

