import Dialog from "./Dialog";
import Navbar from "./Navbar";
import { useState } from "react";
import "./notes.css";

const Notes = () => {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  const addNote = (data) => {
    setNotes([...notes, data]);
  };

  console.log(notes);

  return (
    <div className="notes">
      <Navbar showForm={showForm} setShowForm={setShowForm} />

      <Dialog addNote={addNote} show={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
};

export default Notes;
