import React, { useState } from 'react';
import styles from './css/TrackListing.module.css';

const tracksData = [
    { id: "1", name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: "2", name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: "3", name: "Song 3", artist: "Artist 3", album: "Album 3" },
]

function TrackListing() {

    const [tracks, setTracks] = useState(tracksData);

    return (
        <div className={styles.listing}>
            <ul>
            {tracks.map((track) => {
                return (
                    <li key={track.id}>
                        <div className={styles.trackName}>{track.name}</div>
                        <div className={styles.trackArtist}>{track.artist}</div>
                        <div className={styles.trackAlbum}>{track.album}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default TrackListing;
