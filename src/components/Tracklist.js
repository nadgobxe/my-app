import React from "react";
import Track from "./Track";

function TrackList ({tracks, removeSong}) {
    const trueTrackList = false;
    return (
        <div>
            <div>
             {tracks.map(track => 
            <Track key={track.id} track={track} trueTrackList={trueTrackList} removeSong={removeSong}/>
            )}
            </div>
            <form>
                <input type="button" value="Submit"></input>    
            </form>
        </div>
    );
}

export default TrackList;
