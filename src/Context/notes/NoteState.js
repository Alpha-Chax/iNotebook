import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

   // Get all Notes
   const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZGJlNGJkZmRhYmZmNzYwZmFiZTIyIn0sImlhdCI6MTY2NTA0OTMxNn0.pGQKM17d1IYdxjo8I3tw4aJzPux-VIGxKhbx-rqr-IM"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  //Add a Note
  const addNote = async(title, description, tag) => {
    //API Call
    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZGJlNGJkZmRhYmZmNzYwZmFiZTIyIn0sImlhdCI6MTY2NTA0OTMxNn0.pGQKM17d1IYdxjo8I3tw4aJzPux-VIGxKhbx-rqr-IM",
        },
        body: JSON.stringify({title, description, tag}),
      }
    );
   const json = response.json();
   console.log(json);
    
    const note = {
      _id: "61c322f19553781a8ca8d0e08",
      user: "6131dc5e3e4037cd4734a066",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete a Note
  const deleteNote = async(id) => {
    //API Call
    const response = await fetch(
      `${host}/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZGJlNGJkZmRhYmZmNzYwZmFiZTIyIn0sImlhdCI6MTY2NTA0OTMxNn0.pGQKM17d1IYdxjo8I3tw4aJzPux-VIGxKhbx-rqr-IM",
        },
      }
    );
   const json = response.json();
   console.log(json);

    console.log("Deleting note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "Application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzZGJlNGJkZmRhYmZmNzYwZmFiZTIyIn0sImlhdCI6MTY2NTA0OTMxNn0.pGQKM17d1IYdxjo8I3tw4aJzPux-VIGxKhbx-rqr-IM",
        },
        body: JSON.stringify({title, description, tag}),
      }
    );
   const json = await response.json();
   console.log(json);
    
   let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
