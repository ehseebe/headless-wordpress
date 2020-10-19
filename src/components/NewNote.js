import React from 'react';
import Axios from 'axios';

export default function NewNote() {

  const handleClick = () => {
    const text = document.querySelector('#noteinput').value.trim();
    if (text) {
      Axios.post("/wp-json/wp/v2/notes", text).then(res => console.log("new post??", res.data))
    }
    document.querySelector('#noteinput').value = '';
  }

  return (
    <>
    <input id="noteinput" style={{ width: '80%' }} type="text" placeholder="Enter a new note" />

    <button onClick={() => handleClick()}> Add note </button> 
    {/* on submit, make a post request */}
    </>
  )
}