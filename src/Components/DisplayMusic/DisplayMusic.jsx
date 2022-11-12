

const DisplayMusic = (props) => {                           // destructuring data: ({songs}) instead of props
    
    return ( 
        <table className='table'>
            <thead>
            <tr>
                {/* <th>Entry Number</th> */}
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release_Date</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            {props.parentSongs.map((song,index) => {        // destructuring data: {songs.map((song) =>....rest of table)} then don't need "props."
                return (
                    <tr>
                        {/* <td>{index + 1}</td> */}
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