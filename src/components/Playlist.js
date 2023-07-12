import React, {useState} from "react";
import TrackList from "./TrackList";

function Playlist ({title, tracks, removeSong, editTitle}) {

const handleChange = ({ target }) => {
    const {value} = target;
    editTitle(value);
}

    return (
        <div>
            <h2>{title}</h2>
            <input type="text" placeholder='Edit Playlist Title' onChange={handleChange}></input>
            <TrackList tracks={tracks} removeSong={removeSong}/>
        </div>
    )

}

export default Playlist;