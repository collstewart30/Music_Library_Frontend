import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddSongForm.css';

const AddSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setRelease_Date] = useState('');
    const [genre, setGenre] = useState('');

    let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre
    };

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(newSong);
        addNewSong(newSong);
        props.addNewSongProperty(newSong)
    }

    async function addNewSong(newSong){
        const responseAdd = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
        // let tempSongs = [ ...songs, song];
        props.addNewSongPropertyNew (responseAdd);
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Title</label>
                <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label>Artist</label>
                <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                <label>Album</label>
                <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                <label>Release_Date</label>
                <input type='date' className='form-control' value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
                <label>Genre</label>
                <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <button type='submit' className='btn btn-primary' style={{'margin-top':'1em'}}>Add Song</button>
            </div>
        </form>
     );
}
 
export default AddSongForm;