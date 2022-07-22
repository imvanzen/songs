import { Action, Song } from "../types"

// Reducers
export const songsReducer = (): Array<Song> => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it that way', duration: '1:45' }
    ]
}

export const selectedSongReducer = (selectedSong: Song | null = null, action: Action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}