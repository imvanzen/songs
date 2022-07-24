import React from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'

interface Props {
    selectedSong: Song
}

const SongDetail = ({ selectedSong }: Props) => {
    const renderSongDetail = () => {
        if (selectedSong) {
            return (
                <>
                    <h1>{selectedSong.title}</h1>
                    <div>{selectedSong.duration}</div>
                </>
            )
        }

        return <h1>No song selected</h1>
    }

    return (
        <div className='song-detail'>
            {renderSongDetail()}
        </div>
    )
}

const mapState = (state: any) => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapState)(SongDetail)