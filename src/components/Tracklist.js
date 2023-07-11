import React from "react";
import Track from "./Track";

function TrackList ({tracks}) {
    const trueTrackList = false;
    return (
        <div>
             {tracks.map(track => 
            <Track key={track.id} track={track} trueTrackList={trueTrackList}/>
            )}
        </div>
    );
}

export default TrackList;
