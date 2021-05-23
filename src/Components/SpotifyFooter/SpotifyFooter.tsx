import React, { useEffect, useState } from "react";
import "./SpotifyFooter.css";
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function SpotifyFooter(): JSX.Element {
    let [{ track, playing, playlistChosen }, dispatch] = useDataLayerValue();
    const Test_Audio = document.getElementById("Test_Audio") as HTMLMediaElement;
    const [toggleRepeat, setToggleRepeat] = useState<boolean>(false);
    const [toggleShuffle, setToggleShuffle] = useState<boolean>(false);
    let tempPlaylistChosen = { ...playlistChosen };

    useEffect(() => {
        if (toggleShuffle) {
            playlistChosen.tracks.items = playlistChosen.tracks.items.sort((a, b) => 0.5 - Math.random());
        } else {
            playlistChosen = { ...tempPlaylistChosen };
        }
    }, [toggleShuffle]);

    useEffect(() => {
        setToggleShuffle(false);
    },[playlistChosen])

    useEffect(() => {
        if (track && playing) {
            Test_Audio.play();
        } else if (track && !playing) {
            Test_Audio.pause();
        }
    }, [track,playing])

    function handlePlaySong() {
        if (track && playing) {
            dispatch({ type: 'SET_PLAYING', playing: !playing })
            Test_Audio.pause();
        } else {
            dispatch({ type: 'SET_PLAYING', playing: !playing })
            Test_Audio.play();
        }
    }

    function handleSkipNextPlaylist() {
        if (playlistChosen && track) {
            const indexTrack = playlistChosen.tracks.items.findIndex(item => item.track.name === track.name);
            if (indexTrack === (playlistChosen.tracks.items.length - 1)) {
                dispatch({ type: 'SET_TRACK', track: playlistChosen.tracks.items[0].track })
            } else {
                dispatch({ type: 'SET_TRACK', track: playlistChosen.tracks.items[indexTrack + 1].track })
            }
        }
    }

    function handleSkipPreviousPlaylist() {
        if (playlistChosen && track) {
            const indexTrack = playlistChosen.tracks.items.findIndex(item => item.track.name === track.name);
            if (indexTrack === 0) {
                dispatch({ type: 'SET_TRACK', track: playlistChosen.tracks.items[playlistChosen.tracks.items.length - 1].track })
            } else {
                dispatch({ type: 'SET_TRACK', track: playlistChosen.tracks.items[indexTrack - 1].track })
            }
        }
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
                <Shuffle className={toggleShuffle ? "footer_green OnShuffle" : "footer_green"} onClick={() => setToggleShuffle(!toggleShuffle)} />
                <SkipPrevious className="footer_icon" onClick={handleSkipPreviousPlaylist} />
                <PlayCircleOutline fontSize="large" className={playing ? "footer_green OnPlay" : "footer_green"} onClick={handlePlaySong} />
                <audio id="Test_Audio" src={track?.preview_url}></audio>
                <SkipNext className="footer_green" onClick={handleSkipNextPlaylist} />
                <Repeat className={toggleRepeat ? "footer_green OnRepeat" : "footer_green"} onClick={() => setToggleRepeat(!toggleRepeat)} />
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
