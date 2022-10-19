import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';

function App() {

  const [songs, setSongs] = useState([{title: 'So Much To Say', artist: 'Dave Matthews Band', album: 'Crash', release_date: '1996-04-30', genre: 'Rock'}]);

   useEffect(() =>{
     getAllSongs();
   }, []);

   async function getAllSongs(){
     const response = await axios.get('http://127.0.0.1:8000/api/music/');
     console.log(response.data);
     setSongs(response.data)
  }
  
  // {<button type='submit' onClick={() => getAllSongs()}>Get All Songs</button>}
  return (
    <div>
      <DisplayMusic parentSongs={songs}/>
      <AddSongForm />
    </div>
  );
}

export default App;
