import React from 'react';
import Axios from 'axios';

export default function NewNote() {

  return (
    <>
    <input style={{ width: '80%' }} type="text" placeholder="Enter a new note" />

    <button> Add note </button> 
    {/* on submit, make a post request */}
    </>
  )
}