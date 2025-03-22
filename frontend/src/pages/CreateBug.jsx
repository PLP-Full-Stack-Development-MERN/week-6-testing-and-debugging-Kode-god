import React from "react";
import BugForm from "../componenets/BugForm";
import { useNavigate } from "react-router-dom";

const CreateBug = () => {
  const navigate = useNavigate();

  const handleBugCreated = (bug) => {
    navigate("/"); // Redirect to home page after bug creation
  };

  return (
    <div>
      <h1>Create New Bug</h1>
      <BugForm onBugCreated={handleBugCreated} />
    </div>
  );
};

export default CreateBug;