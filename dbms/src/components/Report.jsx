/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function Report() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [participantId, setParticipantId] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/generate`, {
        params: { participant_id: participantId },
      });
      console.log('API Response:', response.data);
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to generate report from the database.');
    }
  };

  // Helper function to render table rows
  const renderTableRows = (label, content) => {
    return content ? (
      <tr>
        <td className="border p-2 font-bold">{label}</td>
        <td className="border p-2">{content}</td>
      </tr>
    ) : null;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Participant Report</h1>

      <div className="mb-4">
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

      {/* Display Participant Info in a Table */}
      {data && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Participant Info</h3>
          <table className="min-w-full border-collapse border mb-6">
            <tbody>
              {renderTableRows('Name', data.participant_name)}
              {renderTableRows('Email', data.participant_email)}
              {renderTableRows('Phone', data.phone_no)}
              {renderTableRows('Address', data.address)}
              {renderTableRows('Date of Birth', data.date_of_birth)}
              {renderTableRows('Age', data.age)}
              {renderTableRows('Gender', data.gender)}
            </tbody>
          </table>

          {/* Display Aggregated Details in Another Table */}
          <h3 className="text-lg font-bold mb-2">Details</h3>
          <table className="min-w-full border-collapse border">
            <tbody>
              {renderTableRows('Enrollment Details', data.enrollment_details)}
              {renderTableRows('Program Details', data.program_details)}
              {renderTableRows('Feedback Details', data.feedback_details)}
              {renderTableRows('Health Record Details', data.health_record_details)}
              {renderTableRows('Payment Details', data.payment_details)}
              {renderTableRows('Session and Instructor Details', data.session_instructor_details)}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Report;
