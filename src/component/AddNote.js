import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
export const AddNote = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { addNote } = context;
  const handleClick = (e) => {
    e.preventDefault()
    addNote(note.title , note.description , note.tag);
    setNote({ title: "", description: "", tag: "" })
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            value={note.title}
            name="title"
            id="title"
            minLength={5}
            required
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            value={note.description}
            name="description"
            id="description"
            minLength={5}
            required
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Todo Tag
          </label>
          <input
            type="text"
            className="form-control"
            value={note.tag}
            name="tag"
            id="tag"
            minLength={5} required
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          disabled = {note.title.length <5 || note.description.length <5}
          className="btn btn-sm btn-success"
          onClick={handleClick}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
