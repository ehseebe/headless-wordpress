import React from 'react';
import './App.css';
import Axios from 'axios';
import NewNote from './components/NewNote';
import ViewNote from './components/ViewNote';
import NoteList from './components/NoteList';


function App() {
  
  Axios.get("/wp-json/wp/v2/posts").then(res => console.log(res.data))

  // get should be made here and pass props to components
  // show viewNote on click of list item
  // open text field to write note easily/more reminder set up
  // use ACF to show completed true/false
  return (
    <div className="App">
      YAS
      <NewNote />
      {/* <ViewNote />
      <NoteList /> */}
    </div>
  );
}

export default App;
