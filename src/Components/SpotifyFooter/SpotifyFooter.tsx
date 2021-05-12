import React from "react";
import "./SpotifyFooter.css";
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function SpotifyFooter(): JSX.Element {
    return (
        <div className="SpotifyFooter">
            <div className="footer_left">
                <img src="https://i.ytimg.com/vi/XGXZOQ8yTU4/maxresdefault.jpg" alt="" />
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className="footer_center">
                <Shuffle className="footer_green" />
                <SkipPrevious className="footer_icon" />
                <PlayCircleOutline fontSize="large" className="footer_green" />
                <SkipNext className="footer_green" />
                <Repeat className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider  />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SpotifyFooter;
