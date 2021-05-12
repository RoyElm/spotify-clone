import React from "react";
import { loginUrl } from "../../Services/Spotify";
import "./Login.css";

function Login(): JSX.Element {
    return (
        <div className="Login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <a href={loginUrl}>Login with spotify</a>
        </div>
    );
}

export default Login;
