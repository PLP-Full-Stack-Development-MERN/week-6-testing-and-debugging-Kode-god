import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBugs, updateBug } from "../api";

const BugDetails = () => {
  const { id } = useParams();
  const [bug, setBug] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchBug = async () => {
      const response = await getBugs();
      const foundBug = response.data.find((b) => b._id === id);
      setBug(foundBug);
      setStatus(foundBug.status);
    };
    fetchBug();
  }, [id]);

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    await updateBug(id, { status: newStatus });
  };

  if (!bug) return <div>Loading...</div>;

  return (
    <div>
      <h1>{bug.title}</h1>
      <p>{bug.description}</p>
      <select value={status} onChange={handleStatusChange}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
};

export default BugDetails;