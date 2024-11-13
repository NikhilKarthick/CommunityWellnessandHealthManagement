/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import axios from 'axios';

function HealthDetails() {
  // State for each field
  const [participantId, setParticipantId] = useState("");
  const [programId, setProgramId] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [comments, setComments] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const healthDetails = {
      participant_id: participantId,
      program_id: programId,
      date,
      weight,
      bp: bloodPressure,
      cholestrol: cholesterol,
      health_status: healthStatus,
      notes: comments,
    };

    try {
      let response = await axios.post("/api/healthrecord", healthDetails, {
        withCredentials: true,
      });
      console.log(response);
      alert('Health details submitted successfully');
    } catch (error) {
      console.log(error);
      alert('Failed to submit health details');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Health Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Participant ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={participantId}
              onChange={(e) => setParticipantId(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Program ID"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={programId}
              onChange={(e) => setProgramId(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Date"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Weight (kg)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Blood Pressure (e.g., 120/80)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bloodPressure}
              onChange={(e) => setBloodPressure(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="number"
              placeholder="Cholesterol (mg/dL)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={cholesterol}
              onChange={(e) => setCholesterol(e.target.value)}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Health Status"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={healthStatus}
              onChange={(e) => setHealthStatus(e.target.value)}
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Comments/Notes"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Health Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default HealthDetails;
