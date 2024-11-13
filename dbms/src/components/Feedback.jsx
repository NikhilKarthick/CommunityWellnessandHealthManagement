/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from 'axios';

function Feedback() {
  const [participantId, setParticipantId] = useState("");
  const [programId, setProgramId] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const json = {
      participant_id: participantId,
      program_id: programId,
      rating: rating,
      comments: comments,
    };

    try {
      const response = await axios.post("/api/feedback", json);
      alert('Feedback submitted successfully');
      console.log("Feedback submitted:", response);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Participant ID</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Participant ID"
            value={participantId}
            onChange={(e) => setParticipantId(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Program ID</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Program ID"
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Rating</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Rating (1-5)"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">Comments</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Write your comments here..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
