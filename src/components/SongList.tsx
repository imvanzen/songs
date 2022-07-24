import React from 'react'
import { Key } from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'

interface Props {
    songs: Array<Song>
};

const SongList = (props: Props) => {
    const { songs } = props
    const renderedSongs = songs.map(({ title }: Song) => (
        <div className='item' key={title as Key}>
            Name: <b>{title}</b>
        </div>
    ))
    return (
        <div className='song-list ui list'>
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
