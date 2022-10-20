// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

{/* <td>
    <button type='submit' onClick={DeleteSong}>Delete Song</button>
</td> */}

// function DeleteSong(){
    
    //     useEffect(async() =>{
        //         const responseDelete = await axios.delete('http://127.0.0.1:8000/api/music/');
        //     }, []);
        
        // }


const DisplayMusic = (props) => {
    
    return ( 
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
            {props.parentSongs.map((song,index) => {
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
     );
}
 
export default DisplayMusic;