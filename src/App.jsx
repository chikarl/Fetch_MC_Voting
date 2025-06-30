import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Campaigns from "./pages/Campaigns";
import Error from "./pages/Error";
import Nav from "./components/Nav";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SingleCampaign from "./pages/SingleCampaign";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="campaign/:campaign_id" element={<SingleCampaign />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
