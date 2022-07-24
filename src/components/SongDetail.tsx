import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { Song } from '../types'

interface Props {
    selectedSong: Song
}

const SongDetail = ({ selectedSong }: Props): ReactElement => {
    const renderSongDetail = () => {
        if (selectedSong == null) {
            return <h1>No song selected</h1>
        }

        return (
            <>
                <h3>Details for:</h3>
                <p>{selectedSong.title}</p>
                <p>{selectedSong.duration}</p>
            </>
        )
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