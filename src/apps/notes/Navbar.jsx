import React from "react";

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <div className="navbar">
      <h2>Notes App</h2>

      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Close Form" : "Add Note"}</button>
    </div>
  );
};

export default Navbar;
