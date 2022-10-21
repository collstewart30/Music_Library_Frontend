import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import AddSongForm from './Components/AddSong/AddSongForm';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';

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
    <div className='container'>
      <h1 className='border-box text-center p-3 mb-2 bg-secondary text-white' style={{'margin-bottom':'1em'}}>COLLEEN'S MUSIC LIBRARY</h1>
      <div className='row border-box text-muted'>
        <h3>SEARCH LIBRARY</h3>
        <SearchBar searchBarParent={searchBar}/>
      </div>
      <div className='row border-box text-muted'>
        <h3>ALL SONGS</h3>
        <DisplayMusic parentSongs={songs}/>
      </div>
      <div className='row border-box text-muted'>
        <h3>ADD SONG</h3>
        <AddSongForm addNewSongProperty={setSongs}/>
      </div>
        {/* <DeleteSong /> */}
    </div>
  );
}

export default App;
