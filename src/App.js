import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Cookie from "./components/Cookie";
import Home from "./pages/Home";
import Joblistings from "./pages/Joblistings";
import Notifications from "./pages/Notifications";
import Search from "./pages/Search";
import SavedJobs from "./pages/SavedJobs";
import JobApplications from "./pages/JobApplications";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListingDetails from "./pages/ListingDetails";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Cookie />
      <Routes>
        <Route path="/" element={<Home {...props} />} />
        <Route path="/job-listings" element={<Joblistings {...props} />} />
        <Route path="/job-applications" element={<JobApplications {...props} />} />
        <Route path="/search" element={<Search {...props} />} />
        <Route path="/notifications" element={<Notifications {...props} />} />
        <Route path="/saved-jobs" element={<SavedJobs {...props} />} />
        <Route path="/profile" element={<Profile {...props} />} />
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/register" element={<Register {...props} />} />
        <Route path="/listing-details" element={<ListingDetails {...props} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
