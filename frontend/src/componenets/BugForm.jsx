import React, { useState } from "react";
import { createBug } from "../api";

const BugForm = ({ onBugCreated }) => {
  const [bug, setBug] = useState({ title: "", description: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBug = await createBug(bug);
    onBugCreated(newBug.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={bug.title}
        onChange={(e) => setBug({ ...bug, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={bug.description}
        onChange={(e) => setBug({ ...bug, description: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BugForm;