import { Action } from '../types'

// Action creator
export const selectSong = (song: String): Action => {
    // Retur nselect song action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}