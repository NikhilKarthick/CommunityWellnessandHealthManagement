/* eslint-disable no-unused-vars */
import React from "react";

function Instructor() {
  const instructors = [
    {
      instructor_id: 1,
      name: "Dr. Jane Smith",
      email: "jane.smith@example.com",
      specialization: "Community Health",
    },
    {
      instructor_id: 2,
      name: "Dr. John Doe",
      email: "john.doe@example.com",
      specialization: "Mental Health",
    },
    {
      instructor_id: 3,
      name: "Dr. Emily Davis",
      email: "emily.davis@example.com",
      specialization: "Nutrition and Wellness",
    },
    {
      instructor_id: 4,
      name: "Dr. Michael Brown",
      email: "michael.brown@example.com",
      specialization: "Chronic Disease Management",
    },
    {
      instructor_id: 5,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@example.com",
      specialization: "Physical Activity",
    },
    {
      instructor_id: 6,
      name: "Dr. Kevin White",
      email: "kevin.white@example.com",
      specialization: "Elderly Care",
    },
    {
      instructor_id: 7,
      name: "Dr. Rachel Green",
      email: "rachel.green@example.com",
      specialization: "Maternal and Child Health",
    },
    {
      instructor_id: 8,
      name: "Dr. Chris Red",
      email: "chris.red@example.com",
      specialization: "Substance Abuse Recovery",
    },
    {
      instructor_id: 9,
      name: "Dr. Daniel Blue",
      email: "daniel.blue@example.com",
      specialization: "Community Vaccination",
    },
    {
      instructor_id: 10,
      name: "Dr. Olivia Black",
      email: "olivia.black@example.com",
      specialization: "Healthcare Management",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-2">
        All About the Instructors
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Instructor ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Specialization</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {instructors.map((instructor) => (
              <tr
                key={instructor.instructor_id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-6">{instructor.instructor_id}</td>
                <td className="py-3 px-6">{instructor.name}</td>
                <td className="py-3 px-6">{instructor.email}</td>
                <td className="py-3 px-6">{instructor.specialization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Instructor;
