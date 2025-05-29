import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ showForm, setShowForm }) => {
  return (
    <div className="navbar">
      <h2>Notes App</h2>

      <div>
        <Link to={"/"} style={{ marginRight: "20px" }}>
          Home
        </Link>
        <button onClick={() => setShowForm(!showForm)}>{showForm ? "Close Form" : "Add Note"}</button>
      </div>
    </div>
  );
};

export default Navbar;
