import React, { useState } from 'react';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import styles from './css/App.module.css'; // Assuming your styles are in a file named App.module.css

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Muie Steaua', artist: 'Sa moara Maria', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
  ]);

  const [playListSong, setPlayListSong] = useState([
    { id: 2, name: 'Song  Steaua', artist: 'ElDolor', album: 'Album 12' },
  ])

  const [title, setTitle] = useState('My Default Playlist');

  const addSong = (song) => {
    setPlayListSong(prevSongs => [song, ...prevSongs]);
};

const removeSong = (songToRemove) => {
  setPlayListSong(prevSongs => prevSongs.filter(song => song.id !== songToRemove.id));
};

const editTitle = (newTitle) => {
  setTitle(newTitle);
}

  return (
    <div>
      <h1>My Jammming App</h1>
      <div className={styles.app}>
        <div className={styles['search-results']}>
          <SearchResults tracks={searchResults} addedTracks={playListSong} addSong={addSong} removeSong={removeSong}/>
        </div>
        <div className={styles.playlist}>
          <Playlist title={title} tracks={playListSong} removeSong={removeSong} editTitle={editTitle} />
        </div>
      </div>
    </div>
  );
}

export default App;