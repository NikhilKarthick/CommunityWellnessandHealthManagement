/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function Enrollment() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [participantId, setParticipantId] = useState("");
  const [programId, setProgramId] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [showRedirectButton, setShowRedirectButton] = useState(false); // New state

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setIsSignUp(true);

    const json = {
      participant_id: participantId,
      program_id: programId,
      enrollment_date: enrollmentDate,
    };

    try {
      const response = await axios.post("/api/enrollment", json, {
        withCredentials: true
      });
      console.log("Enrollment successful:", response);
      alert('Enrolled successfully');

      // Show the new button after successful enrollment
      setShowRedirectButton(true);
    } catch (error) {
      console.error("Error enrolling user:", error);
      alert('Enroll failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Sign Up for Program' : 'Sign In'}
        </h1>
        <form onSubmit={handleSignUp}>
          <div className="space-y-4">
            {isSignUp && (
              <>
                <div className="relative">
                  <label className="block text-gray-700">Participant ID</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Participant ID"
                    value={participantId}
                    onChange={(e) => setParticipantId(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-700">Program ID</label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Program ID"
                    value={programId}
                    onChange={(e) => setProgramId(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-gray-700">Enrollment Date</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Date"
                    value={enrollmentDate}
                    onChange={(e) => setEnrollmentDate(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="submit"
              className={`w-full py-3 text-white rounded-md ${isSignUp ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!isSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* New button that appears after sign-up */}
        {showRedirectButton && (
          <button
            type="button"
            className="mt-4 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-md"
            onClick={() => window.location.href = "/payment"} // Replace with your URL
          >
            Go To Payments
          </button>
        )}
      </div>
    </div>
  );
}

export default Enrollment;
