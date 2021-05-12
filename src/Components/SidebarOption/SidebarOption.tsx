import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon = null }): JSX.Element {
    return (
        <div className="SidebarOption">
            {Icon && <Icon className="SidebarOption_icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    );
}

export default SidebarOption;
