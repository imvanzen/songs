import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

const SongList = () => {
    return (
        <div className='song-list'>SongList</div>
    )
}

export default connect()(SongList)