import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        {title: 'zim zim',          duration: '4:40'},
        {title: 'behet ghol midam', duration: '2:80'},
        {title: 'bighrar',          duration: '3:60'},
        {title: 'gole yakh',        duration: '5:05'},
    ];
};


const selectedSongReducer = (selectedsong= null, actions) => {
    if (actions.type === 'SONG_SELECTED'){
        return actions.payload;
    }
    return selectedsong;
};

export default combineReducers ({
    songs:        songsReducer,
    selectedSong: selectedSongReducer
});