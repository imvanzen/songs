
import { AnyAction, combineReducers } from 'redux'
import { Song } from '../types'

// Reducers
const songsReducer = (): Array<Song> => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it that way', duration: '1:45' }
    ]
}

const selectedSongReducer = (selectedSong: Song | null = null, action: AnyAction): Song | null => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})