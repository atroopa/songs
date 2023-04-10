
export const selectedSong = song => {
    return {
        typeo: 'SONG_SELECTED',
        payload: song
    };
};