import Tile from './Tile';

export default function TileRow({attempt, displayProgress}) {

    const tilesRow = attempt.map((letter, index, array) =>
        <Tile
            key = {index}
            index = {index}
            letter = {letter}
            array = {array}
            displayProgress = {displayProgress}
        />
    )

    return ( 
        <div className='row'>
            {tilesRow}
        </div>

    )
}