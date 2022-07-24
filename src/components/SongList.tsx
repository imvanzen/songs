import React from 'react'
import { Key } from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'

interface Props {
    songs: Array<Song>
};

const SongList = (props: Props) => {
    const { songs } = props
    const renderedSongs = songs.map((song: Song, index: Key) => (
        <div key={index}>Name: <b>{song.title}</b> Duration: <b>{song.duration}</b></div>
    ))
    return (
        <div className='song-list'>
            {renderedSongs}
        </div>
    )
}

const mapState = (state: any) => {
    return {
        songs: state.songs
    }
}

export default connect(mapState)(SongList)
