import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NoteList() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("/wp-json/wp/v2/notes")
    .then(res => setNotes(res.data))
    .catch((err) => console.log(err.message));
  }, []);
  
  console.log("notes?", notes.length)

  // display list of all posted notes
  // show excerpts
  // scroll
  
  return (
    <>
      NoteList
      {notes.map((note) => (
        <ul>
        <li>{note.title.rendered}</li>
        <li>{note.date}</li>
        <li>{note.content.rendered}</li>
        </ul>
      ))}
    </>
  )
}