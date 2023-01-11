import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote}=context
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)
          }}></i>
          <i className="fa-regular fa-pen-to-square mx-2 " onClick={()=>{updateNote(note)
          }}></i>
          <p className="card-text">
          {note.description}
          </p>
        </div>
      </div>
      </div>
    
  );
};
