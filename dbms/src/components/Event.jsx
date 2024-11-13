/* eslint-disable no-unused-vars */
import React from "react";

function Event() {
  const programs = [
    {
      program_id: 1,
      name: "Community Health Outreach",
      description: "A program to provide health education and preventive care in underserved communities.",
      start_date: "2024-01-15",
      end_date: "2024-03-15",
    },
    {
      program_id: 2,
      name: "Mental Health Awareness",
      description: "Workshops and support groups to promote mental health and well-being.",
      start_date: "2024-02-01",
      end_date: "2024-04-10",
    },
    {
      program_id: 3,
      name: "Nutrition and Wellness Program",
      description: "Educational sessions on balanced diets and healthy living practices.",
      start_date: "2024-03-05",
      end_date: "2024-05-25",
    },
    {
      program_id: 4,
      name: "Chronic Disease Management",
      description: "Guidance and resources for managing diabetes, hypertension, and other chronic conditions.",
      start_date: "2024-04-20",
      end_date: "2024-06-30",
    },
    {
      program_id: 5,
      name: "Physical Activity Initiative",
      description: "Organized fitness classes and activities to promote physical health in the community.",
      start_date: "2024-05-10",
      end_date: "2024-07-15",
    },
    {
      program_id: 6,
      name: "Elderly Care and Support",
      description: "Workshops and resources for caregivers and support programs for the elderly.",
      start_date: "2024-06-01",
      end_date: "2024-08-20",
    },
    {
      program_id: 7,
      name: "Maternal and Child Health",
      description: "Programs focused on prenatal care, postnatal care, and child health education.",
      start_date: "2024-07-05",
      end_date: "2024-09-10",
    },
    {
      program_id: 8,
      name: "Substance Abuse Recovery",
      description: "Support groups and counseling services for individuals recovering from substance abuse.",
      start_date: "2024-08-15",
      end_date: "2024-10-25",
    },
    {
      program_id: 9,
      name: "Community Vaccination Drive",
      description: "An initiative to provide free vaccines and educate the community about immunization.",
      start_date: "2024-09-01",
      end_date: "2024-11-15",
    },
    {
      program_id: 10,
      name: "Healthcare Management Training",
      description: "Workshops to train community leaders in effective healthcare management practices.",
      start_date: "2024-10-10",
      end_date: "2024-12-20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-2">
        All the Health Events
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Program ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Start Date</th>
              <th className="py-3 px-6 text-left">End Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {programs.map((program) => (
              <tr
                key={program.program_id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="py-3 px-6">{program.program_id}</td>
                <td className="py-3 px-6">{program.name}</td>
                <td className="py-3 px-6">{program.description}</td>
                <td className="py-3 px-6">{program.start_date}</td>
                <td className="py-3 px-6">{program.end_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Event;
