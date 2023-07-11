import React, {useState} from "react";
import TrackList from "./TrackList";

function Playlist ({title, tracks}) {
    return (
        <div>
            <h2>{title}</h2>
            <TrackList tracks={tracks} />
        </div>
    )

}

export default Playlist;