import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-lg text-center mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to the Admin Dashboard
      </h1>
      <p className="text-gray-600">
        Use the sidebar to manage Projects, Events, Team, and Gallery.
      </p>
    </div>
  );
};

export default AdminDashboard;
