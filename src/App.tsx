import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import { useDataLayerValue } from './Components/DataLayer/DataLayer';
import Login from './Components/Login/Login';
import Player from './Components/Player/Player';
import { getTokenFromUrl } from './Services/Spotify';

function App() {
    const [token, setToken] = useState(null);
    const spotify = new SpotifyWebApi();
    const [{ }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;
        if (_token) {
            setToken(_token);
            dispatch({ type: 'SET_TOKEN', token: _token })
            spotify.setAccessToken(_token);
            spotify.getMe().then(user => {
                dispatch({ type: 'SET_USER', user });
            })

            spotify.getUserPlaylists().then(playlists => {
                dispatch({ type: 'SET_PLAYLIST', playlists });
            })

            spotify.getPlaylist("37i9dQZEVXcJKbKFmTGuD9").then(discoverWeekly => {
                dispatch({ type: "SET_DISCOVER_WEEKLY", discoverWeekly })
            })
        }

    }, [])

    return (
        <div className="App">
            {
                token ? <Player spotify={spotify} /> : <Login />
            }
        </div>
    );
}

export default App;
