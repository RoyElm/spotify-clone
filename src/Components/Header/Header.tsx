import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons"
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function Header(): JSX.Element {
    const [{ user }] = useDataLayerValue();

    return (
        <div className="Header">
            <div className="header_left">
                <Search />
                <input placeholder="Search for Artists, Songs" type="text" />
            </div>

            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;
