import Dialog from "./Dialog";
import Navbar from "./Navbar";
import { useState } from "react";
import "./notes.css";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

const colors = [
  "#FFFAFA",
  "#F5FFFA",
  "#F0F8FF",
  "#F0FFF0",
  "#E6E6FA",
  "#FFF5EE",
  "#FFFFF0",
  "#FFFFE0",
  "#F7E7CE",
  "#F5F5DC",
  "#F5F5F5",
  "#B0E0E6",
  "#FFDAB9",
  "#FFF8DC",
];

const Notes = () => {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(null);
  const [notes, setNotes] = useState([]);

  const addNote = (data) => {
    setNotes([...notes, data]);
  };

  const updateNote = (data) => {
    const newNotes = [...notes];
    newNotes[isEditing] = data;
    setNotes(newNotes);
  };

  const editNote = (index) => {
    setIsEditing(index);
    setShowForm(true);
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="notes">
      <Navbar showForm={showForm} setShowForm={setShowForm} />

      <Dialog
        editNote={notes[isEditing]}
        updateNote={updateNote}
        addNote={addNote}
        show={showForm}
        onClose={() => setShowForm(false)}
      />

      <div className="notes-container">
        {notes.map((note, index) => (
          <div key={index} className="note" style={{ backgroundColor: colors[index % colors.length] }}>
            <h1>{note.title}</h1>
            <p>{note.message}</p>

            <Pencil onClick={() => editNote(index)} />
            <Trash onClick={() => removeNote(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
