import Dialog from "./Dialog";
import { useState } from "react";
import styles from "./notes.module.css";
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
  const [showMore, setShowMore] = useState(null);

  console.log(notes);

  const addNote = (data) => {
    setNotes([...notes, data]);
  };

  const updateNote = (data) => {
    console.log(data);
    // const newNotes = [...notes];
    // newNotes[isEditing] = data;
    const updatedNotes = notes.map((note) => (note.id === data.id ? data : note));
    setNotes(updatedNotes);
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

  const onClose = () => {
    setShowForm(false);
    setIsEditing(null);
  };

  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <h2>Notes App</h2>
        <button onClick={() => setShowForm(true)}>Add Note</button>
      </div>

      <Dialog editNote={notes[isEditing]} updateNote={updateNote} addNote={addNote} show={showForm} onClose={onClose} />

      <div className={styles.notes_container}>
        {notes.map((note, index) => (
          <div key={index} className={styles.note} style={{ backgroundColor: colors[index % colors.length] }}>
            <h1>{note.title}</h1>
            <p className={showMore == index ? "" : styles.line_clamp_3}>{note.message}</p>

            <button
              onClick={() => setShowMore(showMore == index ? null : `${index}`)}
              style={{ display: note.message.length > 103 ? "block" : "none" }}
            >
              Show {showMore == index ? "less" : "more"}
            </button>

            <Pencil onClick={() => editNote(index)} />
            <Trash onClick={() => removeNote(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
