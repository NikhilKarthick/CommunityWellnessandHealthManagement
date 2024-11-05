/* eslint-disable no-unused-vars */

// Home.js
import React from "react";

function Home() {
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl text-center space-y-6">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">
                    Welcome to the Community Wellness and Health Management System
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to enhance the well-being of our community by providing accessible, comprehensive health management solutions. 
                    This platform offers resources, support, and tools to empower individuals and families to maintain a healthy lifestyle, 
                    with a focus on preventive care, mental health, and personalized wellness plans.
                </p>
                <div className="space-y-4 text-gray-700">
                    <p>
                        🌟 <span className="font-semibold">Preventive Care:</span> Access a range of preventive care resources, including health screenings, vaccination schedules, and wellness tips to help you stay ahead in managing your health.
                    </p>
                    <p>
                        🌱 <span className="font-semibold">Mental Health Support:</span> We offer counseling resources, mental health assessments, and tools to help you manage stress, anxiety, and maintain emotional well-being.
                    </p>
                    <p>
                        🧘 <span className="font-semibold">Personalized Wellness Plans:</span> Build a personalized health plan based on your goals, with recommendations on nutrition, fitness, and wellness activities tailored to your needs.
                    </p>
                </div>
                <div className="mt-8">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
