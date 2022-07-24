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
            <div className='right floated content'>
                <button className='ui button primary'>Select</button>
            </div>
            <div className='content'>{title}</div>
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

export default connect(mapState)(SongList)
