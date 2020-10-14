import React from 'react';
import './App.css';
import Axios from 'axios';
import Note from './components/Note';
import NoteList from './components/NoteList';


function App() {
  
  Axios.get("/wp-json/wp/v2/posts").then(res => console.log(res.data))


  return (
    <div className="App">
      YAS
      <Note />
      <NoteList />
    </div>
  );
}

export default App;
