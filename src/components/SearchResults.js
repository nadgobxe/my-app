import React from "react";
import Track from "./Track";

function SearchResults ({tracks, addedTracks, addSong, removeSong}) {

    const trueTrackList = true;

    return (
        <div>
            <h1>My results</h1>
             {tracks.map(track => {
                console.log("Current track: ", track.id);
                const isAdded = addedTracks.some(addedTrack => {
                    console.log("Added tracks: ", addedTrack.id);
                    const match = addedTrack.id === track.id;
                    console.log("Match result: ", match);
                    return match;
                });
                return <Track key={track.id} track={track} isAdded={isAdded} trueTrackList={trueTrackList} addSong={addSong} removeSong={removeSong}/>
             })}
        </div>
    );
}

export default SearchResults;