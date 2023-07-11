import React, { useState } from 'react';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
    const [searchResults, setSearchResults] = useState([ //results of the search bar
        { id: 1, name: 'Muie Steaua', artist: 'Sa moara Maria', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    ]);

    const [playListSong, setPlayListSong] = useState([ // selected "+" songs from the results
      { id: 2, name: 'Song  Steaua', artist: 'ElDolor', album: 'Album 12' },
    ])

    const [title, setTitle] = useState('My Default Playlist');

  return (
    <div>
      <h1>My Jammming App</h1>
      <SearchResults tracks={searchResults} />
      <Playlist title={title} tracks={playListSong} />
    </div>
  );
}

export default App;