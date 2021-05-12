import React, { useEffect } from "react";
import SidebarOption from "../SidebarOption/SidebarOption";
import "./Sidebar.css";
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from "../DataLayer/DataLayer";

function Sidebar(): JSX.Element {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="Sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOption Icon={Home} title="Home" />
            <SidebarOption Icon={Search} title="Search" />
            <SidebarOption Icon={LibraryMusic} title="Your Library" />
            <br />
            <strong className="Sidebar_title">Playlist</strong>
            <hr />
            {playlists?.items?.map(playlist =>
                <SidebarOption title={playlist.name} />
            )}
        </div>
    );
}

export default Sidebar;
