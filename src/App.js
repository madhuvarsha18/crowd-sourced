import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import RegisterAdmin from "./pages/Auth/RegisterAdmin";
import RegisterClub from "./pages/Auth/RegisterClub";
import ProtectedRoute from "./components/ProtectedRoute";
import UserDashboard from "./pages/User/Dashboard";
import ClubDashboard from "./pages/Club/Dashboard";
import GovernmentDashboard from "./pages/Government/GovernmentDashboard";
import ReportIssue from "./pages/User/ReportIssue";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register/admin" element={<RegisterAdmin />} />
      <Route path="/register/club" element={<RegisterClub />} />
      <Route path="/user/report" element={<ReportIssue />} />
      {/* Dashboards */}
      <Route
  path="/user/dashboard"
  element={
    <ProtectedRoute allowedRole="user">
      <UserDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/club/dashboard"
  element={
    <ProtectedRoute allowedRole="club">
      <ClubDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/government/dashboard"
  element={
    <ProtectedRoute allowedRole="admin">
      <GovernmentDashboard />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;
