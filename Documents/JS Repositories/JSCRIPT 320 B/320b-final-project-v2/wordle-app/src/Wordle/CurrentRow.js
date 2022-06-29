export default function TileRow({attempt, emptySquares}) {

    // const tiles = attempt.map((letter, index) =>
    //     <Tile
    //         key = {index}
    //         letter = {letter}
    //     />
    // )

    // const emptyTiles = emptySquares.map((letter, index) =>
    //     <Tile
    //         key = {index}
    //         letter = {letter}
    //     />
    // )

    // setIsLoading(false);

    return ( 
        <div className='row'>
            {/* {tiles} */}
            {/* {attempt.length !== 5 && (<>{emptyTiles}</>)} */}
            <div className={`square`}>
                <p className="text">{attempt[0]}</p>
            </div>
            <div className={`square`}>
                <p className="text">{attempt[1]}</p>
            </div>
            <div className={`square`}>
                <p className="text">{attempt[2]}</p>
            </div>
            <div className={`square`}>
                <p className="text">{attempt[3]}</p>
            </div>
            <div className={`square`}>
                <p className="text">{attempt[4]}</p>
            </div>
        </div>
    )
}