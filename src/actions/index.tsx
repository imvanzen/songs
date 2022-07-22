// Action creator
export const selectSong = (song: String) => {
    // Retur nselect song action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}