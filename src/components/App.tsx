import React, { ReactElement } from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'

const App = (): ReactElement => {
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