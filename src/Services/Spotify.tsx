import tokenUrLModel from "../Components/Models/token-url.model";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "30d3e094889a4d1a9b7cea97f206d171";
const redirectUri = "http://localhost:3000/";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenFromUrl = ():tokenUrLModel => {
    return window.location.hash
        .substring(1).split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        },new tokenUrLModel());
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
