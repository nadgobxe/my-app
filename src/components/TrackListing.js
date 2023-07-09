import React, {useState} from 'react';

const tracksData = [
    { id: "1", name: "Song 1", artist: "Artist 1", album: "Album 1" },
    { id: "2", name: "Song 2", artist: "Artist 2", album: "Album 2" },
    { id: "3", name: "Song 3", artist: "Artist 3", album: "Album 3" },
]

function TrackListing() {

const [tracks, setTracks] = useState(tracksData);

return (
    <div>
        {tracks.map((track) => {
            return (
              <li key={track.id}>
                  <h3>{track.name}</h3>
                  <h3>{track.artist}</h3>
                  <h3>{track.album}</h3>
              </li>
            )
        })}
    </div>
);
};

export default TrackListing;