import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components
import Header from "./components/Header";
import Home from "./components/Home";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import Destination from "./components/Destination";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
