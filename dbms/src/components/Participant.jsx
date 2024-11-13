/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function Participant() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showRedirectButton, setShowRedirectButton] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSignUp = async () => {
    setIsSignUp(true);

    const json = {
      name,
      email,
      phone_no: phoneNo,
      address,
      date_of_birth: dateOfBirth,
      age,
      gender,
    };

    try {
      let response = await axios.post("/api/register", json, {
        withCredentials: true,
      });
      console.log(response);
      alert('Registration submitted successfully');
      setShowRedirectButton(true); // Show the redirect button after successful signup
    } catch (error) {
      console.log(error);
      alert('Registration failed');
    }
  };

  const handleRedirect = () => {
    window.location.href = "/event"; // Replace with your desired URL
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gray-100">
      <img
        src="need-healthcare-professionals.jpg"
        alt="Healthcare Professionals"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Phone No"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Date of Birth"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="Age"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                name="gender"
                className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <p className="text-sm text-gray-500">
              Lost password? <a href="#" className="text-blue-500">Click Here!</a>
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="button"
              className={`w-full py-3 px-4 text-white rounded-md ${isSignUp ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
              onClick={handleSignUp}
              disabled={!isSignUp}
            >
              Sign Up
            </button>

            {/* Conditionally render the redirect button */}
            {showRedirectButton && (
              <button
                type="button"
                className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                onClick={handleRedirect}
              >
                Events available
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Participant;

