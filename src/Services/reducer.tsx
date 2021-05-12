export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    discoverWeekly:null
}

const reducer = (state, action) => {
    console.log(action);
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
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discoverWeekly: action.discoverWeekly
            }
        default:
            return state;
    }

}

export default reducer;