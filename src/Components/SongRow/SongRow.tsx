import React from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import "./SongRow.css";

function SongRow({ track }): JSX.Element {

    const [{ }, dispatch] = useDataLayerValue();

    function setTrack() {
        console.log(track);
        dispatch({ type: 'SET_TRACK', track: track })
    }

    return (
        <div className="SongRow" onClick={setTrack}>
            <img src={track?.album.images[0].url} alt="" />
            <div className="songRow_Info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name)}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
}

export default SongRow;
