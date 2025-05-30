import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dialog = ({ editNote, updateNote, addNote, show, onClose }) => {
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
    if (editNote) {
      updateNote(form);
    } else {
      addNote({ ...form, id: Date.now() });
    }
    setForm({ title: "", message: "" });
    onClose();
  };

  useEffect(() => {
    if (editNote) {
      setForm(editNote);
    } else {
      setForm({ title: "", message: "" });
    }
  }, [editNote]);

  return (
    <div onClick={onClose} className="dialog" style={{ opacity: show ? 1 : 0, visibility: show ? "visible" : "hidden" }}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <h1>{editNote ? "Edit" : "Add"} Note</h1>
        <div className="form">
          <input name="title" type="text" value={form.title} onChange={handleInput} placeholder="Title" />
          <textarea name="message" value={form.message} onChange={handleInput} placeholder="Message" />
          <button onClick={handleSubmit}>{editNote ? "Update" : "Save"}</button>
        </div>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Dialog;
