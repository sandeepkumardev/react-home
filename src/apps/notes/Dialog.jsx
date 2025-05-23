import React from "react";
import { useState } from "react";

const Dialog = ({ addNote, show, onClose }) => {
  const [form, setForm] = useState({
    title: "",
    message: "",
  });

  const handleInput = (e) => {
    const eleName = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [eleName]: value });
  };

  const handleSubmit = () => {
    addNote(form);
    setForm({ title: "", message: "" });
    onClose();
  };

  return (
    <div className="dialog" style={{ opacity: show ? 1 : 0, visibility: show ? "visible" : "hidden" }}>
      <div className="dialog-content">
        <h1>Add Note</h1>
        <div className="form">
          <input name="title" type="text" value={form.title} onChange={handleInput} placeholder="Title" />
          <textarea name="message" value={form.message} onChange={handleInput} placeholder="Message" />
          <button onClick={handleSubmit}>Save</button>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Dialog;
