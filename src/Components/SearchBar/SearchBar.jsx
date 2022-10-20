// be able to filter the table of music by album, artist, genre, release date, and title
// create a form with one input - this is where the user will type term they will search by
// once the form is submitted the value the user entered should be passed to a function on the app component that then filters the songs by 
// that term depending on if that term mathces any of the song's properties

import { useState } from "react";


const SearchBar = (props) => {
    
    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('search bar console log');
        props.searchBarParent(search);
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input type='text' onChange={(event) => setSearch(event.target.value)}/>
            <button type='submit'>Search Song</button>
        </form>
     );
}
 
export default SearchBar;







// const SearchBar = (props) => {
//     return ( 
//         <div>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Entry Number</th>
//                     <th>Title</th>
//                     <th>Artist</th>
//                     <th>Album</th>
//                     <th>Release_Date</th>
//                     <th>Genre</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {props.parentSongs.map(function(song) => {
//                     return (
//                         <div>
//                             <tr>
//                                 <td>{song.title}</td>
//                                 <td>{song.artist}</td>
//                                 <td>{song.album}</td>
//                                 <td>{song.release_date}</td>
//                                 <td>{song.genre}</td>
//                             </tr>
//                         </div>
//                     );  
//                 });
//                 </tbody>
//             </table>
//         </div>
//      )
// };
 
// export default SearchBar