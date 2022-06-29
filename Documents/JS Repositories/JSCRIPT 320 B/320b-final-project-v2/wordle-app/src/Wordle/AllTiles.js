import React from 'react';
import TileRow from './TileRow';

export default function AllTiles({attempts, displayProgress}) {

    const allTiles = attempts.map((attempt, index) =>
        <TileRow 
            key = {index}
            attempt = {attempt}
            displayProgress = {displayProgress}
        />
    )
    
    return ( 
        <div className='tiles'>
            {allTiles}
        </div>
    )
}