import React from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header/Header";
import "./SpotifyBody.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function SpotifyBody({ spotify }): JSX.Element {

    const [{ discoverWeekly }, dispatch] = useDataLayerValue();

    return (
        <div className="SpotifyBody">
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discoverWeekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilled className="body_shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discoverWeekly?.tracks.items.map(item =>
                    <SongRow track={item.track} />
                )}
            </div>
        </div>
    );
}

export default SpotifyBody;
