import React from "react";

const BugItem = ({ bug, onDelete }) => {
  return (
    <div>
      <h3>{bug.title}</h3>
      <p>{bug.description}</p>
      <button onClick={() => onDelete(bug._id)}>Delete</button>
    </div>
  );
};

export default BugItem;