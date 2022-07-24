import React, { FunctionComponent } from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'
import { selectSong } from '../actions'

const App = () => {
    return (
        <div className='app ui container grid'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
            </div>
            <SongDetail />
        </div>
    )
}

export default App