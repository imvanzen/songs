import React from 'react'
import { Key } from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'
import { selectSong } from '../actions'
import { AnyAction } from 'redux'

interface Props {
    songs: Array<Song>,
    selectSong: (song: Song) => AnyAction
};

const SongList = (props: Props) => {
    const { songs, selectSong } = props
    const renderedSongs = songs.map((song: Song) => (
        <div className='item' key={song.title as Key}>
            <div className='right floated content'>
                <button className='ui button primary' onClick={() => selectSong(song)}>Select</button>
            </div>
            <div className='content'>{song.title}</div>
        </div>
    ))
    return (
        <div className='song-list ui divided list'>
            {renderedSongs}
        </div>
    )
}

const mapState = (state: any) => {
    return {
        songs: state.songs
    }
}

export default connect(mapState, {
    selectSong
})(SongList)
