import React, {useState} from "react";
import TrackListing from "./TrackListing";

function Playlist() {
    const mockP = '90s Goodies';
    const [playlistName, setPlaylistName] = useState(mockP);

    return (
        <div>
            <h1>{playlistName}</h1>
            <ul>
                <TrackListing />
            </ul>
        </div>
    );
}

export default Playlist;