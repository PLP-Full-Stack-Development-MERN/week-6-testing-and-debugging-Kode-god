import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/Home";
import CreateBug from "./pages/CreateBug";
import BugDetails from "./pages/BugDetails";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBug />} />
          <Route path="/bugs/:id" element={<BugDetails />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;