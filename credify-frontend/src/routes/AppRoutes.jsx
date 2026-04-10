import { Routes, Route } from 'react-router-dom';
import Home from '../pages/public/Home';
import Projects from '../pages/public/Projects';
import Courses from '../pages/public/Courses';
import Leaderboard from '../pages/public/Leaderboard';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import CompleteProfile from '../pages/auth/CompleteProfile';
import Dashboard from '../pages/dashboard/Dashboard';
import MyProjects from '../pages/dashboard/MyProjects';
import MySubmissions from '../pages/dashboard/MySubmissions';
import MyCourses from '../pages/dashboard/MyCourses';
import MyBadges from '../pages/dashboard/MyBadges';
import Certificates from '../pages/dashboard/Certificates';
import LeaderboardPrivate from '../pages/dashboard/LeaderboardPrivate';
import CompanyDashboard from '../pages/company/CompanyDashboard';
import AddProject from '../pages/company/AddProject';
import EditProject from '../pages/company/EditProject';
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManageProjects from '../pages/admin/ManageProjects';
import ManageUsers from '../pages/admin/ManageUsers';
import ReviewSubmissions from '../pages/admin/ReviewSubmissions';
import CertificatesApproval from '../pages/admin/CertificatesApproval';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/my-projects" element={<MyProjects />} />
      <Route path="/my-submissions" element={<MySubmissions />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/my-badges" element={<MyBadges />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/leaderboard-private" element={<LeaderboardPrivate />} />
      <Route path="/company-dashboard" element={<CompanyDashboard />} />
      <Route path="/add-project" element={<AddProject />} />
      <Route path="/edit-project" element={<EditProject />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/manage-projects" element={<ManageProjects />} />
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/review-submissions" element={<ReviewSubmissions />} />
      <Route path="/certificates-approval" element={<CertificatesApproval />} />
    </Routes>
  );
};

export default AppRoutes;