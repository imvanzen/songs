import React, { FunctionComponent } from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'

const App = () => {
    return (
        <div className='app ui container'>
            <SongList />
            <SongDetail />
        </div>
    )
}

export default App