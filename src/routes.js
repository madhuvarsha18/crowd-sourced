import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Auth/Login";
import RegisterAdmin from "./pages/Auth/RegisterAdmin";
import RegisterClub from "./pages/Auth/RegisterClub";

import UserDashboard from "./pages/User/Dashboard";
import MyPosts from "./pages/User/MyPosts";
import NearbyIssues from "./pages/User/NearbyIssues";
import ReportIssue from "./pages/User/ReportIssue";

import ClubDashboard from "./pages/Club/Dashboard";
import ClubHistory from "./pages/Club/History";

import GovernmentDashboard from "./pages/Government/GovernmentDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/register/club" element={<RegisterClub />} />

        {/* User */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/report" element={<ReportIssue />} />
        <Route path="/user/nearby" element={<NearbyIssues />} />
        <Route path="/user/myposts" element={<MyPosts />} />

        {/* Club */}
        <Route path="/club/dashboard" element={<ClubDashboard />} />
        <Route path="/club/history" element={<ClubHistory />} />

        {/* Government */}
        <Route path="/government/dashboard" element={<GovernmentDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
