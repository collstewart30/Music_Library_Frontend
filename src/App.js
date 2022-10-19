import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release_Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song,index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
