import React from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header/Header";
import "./SpotifyBody.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function SpotifyBody({ spotify }): JSX.Element {

    const [{ playlistChosen }] = useDataLayerValue();

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
                    <PlayCircleFilled className="body_shuffle" />
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
