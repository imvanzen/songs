import React, { FunctionComponent } from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'
import { selectSong } from '../actions'

const App = () => {
    return (
        <div className='app ui container grid stacked'>
            <div className='ui row'>
                <div className='column eight wide'>
                    <SongList />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App