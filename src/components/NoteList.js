import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NoteList() {

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    axios.get("/wp-json/wp/v2/posts")
    .then(res => 
      setNotes(res.data))
    .catch((err) => console.log(err.message));
  }, []);
  
  console.log("notes?", notes)


  return (
    <div>
      NoteList
    </div>
  )
}