import React from "react";
import styles from './css/Track.module.css';

function Track ({track, isAdded, trueTrackList}) {
    return (
        <div className={styles.track}>
            <div className={styles.full}>{track.name}</div>
            <div className={styles.left}>{track.artist}</div>
            <div className={styles.right}>{track.album}</div> 
            {!isAdded && trueTrackList ? <input type="submit" value="+" /> : null}
        </div>
    );
}

export default Track;