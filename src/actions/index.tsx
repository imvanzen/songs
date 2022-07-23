import { AnyAction } from 'redux'
import { Song } from '../types'

// Action creator
export const selectSong = (song: Song): AnyAction => {
    // Retur nselect song action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}