import React from "react";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import "./SidebarOption.css";
import SpotifyWebApi from 'spotify-web-api-js';


function SidebarOption({ title, Icon = null, id = null }): JSX.Element {
    const [{  }, dispatch] = useDataLayerValue();
    const spotify = new SpotifyWebApi();

    function changePlaylist() {
        if(id){
            spotify.getPlaylist(id).then(playlistChosen => {
                dispatch({ type: "SET_PLAYLIST_CHOSEN", playlistChosen })
            })
        }
    }

    return (
        <div className="SidebarOption" onClick={changePlaylist}>
            {Icon && <Icon className="SidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;
