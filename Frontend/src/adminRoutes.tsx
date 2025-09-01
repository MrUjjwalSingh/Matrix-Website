import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProjects from "./pages/AdminProjects";
import AdminEvents from "./pages/AdminEvents";
import AdminTeam from "./pages/AdminTeam";
import AdminGallery from "./pages/AdminGallery";
import AdminFeedbacks from "./pages/AdminFeedbacks";
import AdminLayout from "./layouts/AdminLayout";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("admin_jwt");
  return token ? <>{children}</> : <Navigate to="/admin/login" />;
};

const AdminRoutes: React.FC = () => (
  <Routes>
    <Route path="login" element={<AdminLogin />} />
    <Route
      path="feedbacks"
      element={
        <PrivateRoute>
          <AdminLayout>
            <AdminFeedbacks />
          </AdminLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="*"
      element={
        <PrivateRoute>
          <AdminLayout>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="projects" element={<AdminProjects />} />
              <Route path="events" element={<AdminEvents />} />
              <Route path="team" element={<AdminTeam />} />
              <Route path="gallery" element={<AdminGallery />} />
            </Routes>
          </AdminLayout>
        </PrivateRoute>
      }
    />
  </Routes>
);

export default AdminRoutes;
