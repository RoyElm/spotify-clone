import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SpotifyBody from "../SpotifyBody/SpotifyBody";
import SpotifyFooter from "../SpotifyFooter/SpotifyFooter";
import "./Player.css";

function Player({ spotify }): JSX.Element {
    return (
        <div className="Player">
            <div className="player_body">
                <Sidebar />
                <SpotifyBody spotify={spotify} />
            </div>
            <SpotifyFooter />
        </div>
    );
}

export default Player;
