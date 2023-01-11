import React, { useContext,useState, useRef, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import { AddNote } from "./AddNote";
import { NoteItem } from "./NoteItem";

export const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;

  useEffect(() => {
    // eslint-disable-next-line
    getNotes();
  }, []);

  const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "default" });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id,etitle: currentNote.title, edescription:currentNote.description, etag: currentNote.tag })
  };
  const handleClick = (e) => {
    editNote(note.id ,note.etitle , note.edescription ,note.etag)
    e.preventDefault()
    refClose.current.click()
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
<button type="button" ref={ref} className="btn btn-primary invisible" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            value={note.etitle}
            name="etitle"
            id="etitle"
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
            value={note.edescription}
            name="edescription"
            id="edescription"
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
            value={note.etag}
            name="etag"
            id="etag"
            required
            onChange={onChange}
          />
        </div>
      </form>
              </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled = {note.etitle.length <5 || note.edescription.length <5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>
      <div className="row my-3">
        <h2>Your Note</h2>
        <div className="container">
          {notes.length ===0 && 'no notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};
