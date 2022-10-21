import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

    // {title: 'So Much To Say', artist: 'Dave Matthews Band', album: 'Crash', release_date: '1996-04-30', genre: 'Rock'}

  useEffect(() =>{
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const responseGet = await axios.get('http://127.0.0.1:8000/api/music/');
    // console.log(responseGet.data);
    setSongs(responseGet.data)
 }  

 function searchBar(searchTerm){
 
  let filteredSongs = songs.filter(function(song){
      if(song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.release_date.includes(searchTerm) || song.genre.includes(searchTerm)){
      return true
      }
    }
  )
    setSongs(filteredSongs)    
 }

  return (
    <div>
      <DisplayMusic parentSongs={songs}/>
      <AddSongForm addNewSongProperty={setSongs}/>
      <SearchBar searchBarParent={searchBar}/>
      {/* <DeleteSong /> */}
    </div>
  );
}

export default App;
