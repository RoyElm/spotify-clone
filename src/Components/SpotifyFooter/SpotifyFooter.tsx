import React from "react";
import "./SpotifyFooter.css";
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function SpotifyFooter(): JSX.Element {
    const [{ track, playing }, dispatch] = useDataLayerValue();
    const Test_Audio = document.getElementById("Test_Audio") as HTMLMediaElement;

    function handlePlaySong() {
        if (track && playing) {
            Test_Audio.play();
        }else {
            Test_Audio.pause();g
        }
        dispatch({ type: 'SET_PLAYING', playing: !playing })
    }

    return (
        <div className="SpotifyFooter">
            <div className="footer_left">
                {track ?
                    <>
                        <img src={track?.album.images[0].url} alt="" />
                        <div className="footer_songInfo">
                            <h4>{track?.name}</h4>
                            <p>{track?.artists[0].name}</p>
                        </div>
                    </>
                    :
                    <>
                        <img src="https://i.ytimg.com/vi/XGXZOQ8yTU4/maxresdefault.jpg" alt="" />
                        <div className="footer_songInfo">
                            <h4>Yeah!</h4>
                            <p>Usher</p>
                        </div>
                    </>}
            </div>
            <div className="footer_center">
                <Shuffle className="footer_green" />
                <SkipPrevious className="footer_icon" />
                <PlayCircleOutline fontSize="large" className="footer_green" onClick={handlePlaySong} />
                <audio id="Test_Audio" src={track?.preview_url}>
                </audio>
                <SkipNext className="footer_green" />
                <Repeat className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item >
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SpotifyFooter;
