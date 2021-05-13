export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    playlistChosen:null,
    track:null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYING':
            return {
                ...state,
                playing: action.playing
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST_CHOSEN':
            return {
                ...state,
                playlistChosen: action.playlistChosen
            }
        case 'SET_TRACK':
            return {
                ...state,
                track: action.track
            }
        default:
            return state;
    }

}

export default reducer;