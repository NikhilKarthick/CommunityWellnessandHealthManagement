/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

function Session() {
  // State variables for form fields
  const [programId, setProgramId] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [location, setLocation] = useState("");
  const [participantId, setParticipantId] = useState("");
  const [showRedirectButton, setShowRedirectButton] = useState(false);

  // Function to handle form submission
  const handleSessionSubmit = async () => {
    const sessionDetails = {
      program_id: programId,
      instructor_id: instructorId,
      session_date: sessionDate,
      session_time: sessionTime,
      location,
      participant_id:participantId
    };

    try {
      let response = await axios.post("/api/session", sessionDetails, {
        withCredentials: true,
      });
      console.log(response);
      alert("Session details submitted successfully");
      setShowRedirectButton(true); // Show redirect button on success
    } catch (error) {
      console.error(error);
      alert("Failed to submit session details");
    }
  };

  const handleRedirect = () => {
    window.location.href = "/report"; // Replace with your desired URL
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Session Details
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Program ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setProgramId(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Instructor ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setInstructorId(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Session Date"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSessionDate(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Session Time"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setSessionTime(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Participant ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setParticipantId(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="button"
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleSessionSubmit}
            >
              Submit Session Details
            </button>

            {showRedirectButton && (
              <button
                type="button"
                className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                onClick={handleRedirect}
              >
                View Report
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Session;
