/* eslint-disable no-unused-vars */



// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-blue-500 text-white fixed top-4 left-4 z-50"
            >
                {isOpen ? "Close" : "Menu"}
            </button>
            
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <ul className="space-y-6 mt-16">
                    <li className="px-6">
                        <Link
                            to="/"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/about"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            About
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/project"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Project
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/contact"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/register"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Register
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/enrollment"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Enrollment
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/event"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Event
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/feedback"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Feedback
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/instructor"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Instructor
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/participant"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Participant
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/payment"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Payment
                        </Link>
                    </li>
                    <li className="px-6">
                        <Link
                            to="/session"
                            className="block text-lg hover:text-blue-300"
                            onClick={handleLinkClick}
                        >
                            Session
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
