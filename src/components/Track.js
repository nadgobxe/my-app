import React, { useEffect, useRef } from "react";
import styles from './css/Track.module.css';

function Track({ track, isAdded, trueTrackList, addSong, removeSong }) {
    const trackRef = useRef(null);
    let newStyle = trackRef.current;

    const handleAddSong = (event) => {
        if (!isAdded) {
            addSong(track);

        }
    };

    const handleRemoveClick = () => {
        removeSong(track);
    };

    return (
        <div className={styles.track} ref={trackRef}>
            <div className={styles.full}>{track.name}</div>
            <div className={styles.left}>{track.artist}</div>
            <div className={styles.right}>{track.album}</div>
            {!isAdded && trueTrackList ? <input type="submit" value="+" onClick={handleAddSong} /> : null}
            {!isAdded && !trueTrackList ? <input type="submit" value="X" onClick={handleRemoveClick} /> : null}
        </div>
    );
}

export default Track;
