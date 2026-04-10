import { Routes, Route } from "react-router-dom";

// import your pages
import Home from "./pages/public/Home";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Projects from "./pages/public/Projects";
import Courses from "./pages/public/Courses";
import Leaderboard from "./pages/public/Leaderboard"; 
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;