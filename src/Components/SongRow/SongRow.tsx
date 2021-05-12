import React from "react";
import "./SongRow.css";

function SongRow({ track }): JSX.Element {
    return (
        <div className="SongRow">
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
