import React, { useEffect } from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header/Header";
import "./SpotifyBody.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function SpotifyBody({ spotify }): JSX.Element {

    const [{ playlistChosen, playing }, dispatch] = useDataLayerValue();

    useEffect(() => {
        if (playlistChosen) {
            dispatch({ type: 'SET_TRACK', track: playlistChosen.tracks.items[0].track })
        }
    },[playlistChosen])

    function handlePlaySongs() {
        dispatch({ type: 'SET_PLAYING', playing: !playing });
    }


    return (
        <div className="SpotifyBody">
            <Header />

            <div className="body_info">
                <img src={playlistChosen?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>{playlistChosen?.name}</h2>
                    <p>{playlistChosen?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className={playing ? "body_shuffle OnPlay" : "body_shuffle"} onClick={handlePlaySongs} />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {playlistChosen?.tracks.items.map(item =>
                    <SongRow key={item.track.id} track={item.track} />
                )}
            </div>
        </div>
    );
}

export default SpotifyBody;
