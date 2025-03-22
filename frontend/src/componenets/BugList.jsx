import React, { useEffect, useState } from "react";
import { getBugs, deleteBug } from "../api";
import BugItem from "./BugItem";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    const response = await getBugs();
    setBugs(response.data);
  };

  const handleDelete = async (id) => {
    await deleteBug(id);
    fetchBugs();
  };

  return (
    <div>
      {bugs.map((bug) => (
        <BugItem key={bug._id} bug={bug} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BugList;