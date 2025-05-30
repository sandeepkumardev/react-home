import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setShowForm }) => {
  return (
    <div className="navbar">
      <h2>Notes App</h2>

      <div>
        <Link to={"/"} style={{ marginRight: "20px" }}>
          Home
        </Link>
        <button onClick={() => setShowForm(true)}>Add Note</button>
      </div>
    </div>
  );
};

export default Navbar;
