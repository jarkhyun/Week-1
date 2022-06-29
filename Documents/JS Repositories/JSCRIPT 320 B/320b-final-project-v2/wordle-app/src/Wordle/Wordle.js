import React, {useEffect, useState} from 'react';
import words from './words.txt';
import Keyboard from "./Keyboard";
import AllTiles from './AllTiles';
import CurrentRow from './CurrentRow';
import '../App.css';

export default function Wordle() {
    const [isLoading, setIsLoading] = useState(true)
    const [letters, setLetters] = useState([]);
    const [attempts, setAttempts] = useState([]);
    const [emptyRows, setEmptyRows] = useState([]);
    // const [emptySquares, setEmptySquares] = useState([]);  

    // const [gameOver, setGameOver] = useState(false);
    const [answer, setAnswer] = useState("");

    const checkIfWord = () => {
        const url = `${process.env.REACT_APP_DICTIONARY_BASE_URL}${letters.join('')}?key=${process.env.REACT_APP_API_KEY}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (typeof(data[0]) !== 'string' && data.length > 0) {
                setAttempts(attempts => [...attempts, letters]);
                setLetters([]);
            }
        })
        .catch(console.error);
    };

    const displayProgress = (index, letter) => {
        let temp = false;
        for (let j = 0; j < 5; j++) {
            if (letter === answer[j]) {
                temp = true;
            }  
        }
        if (letter === answer[index]) {
            return ('correct slightlyLarger');
        }
        else if (temp) {
            return ('mixed slightlyLarger');
        }  
        else if (!temp) {
            if (letter === '') {
                return ('');
            }
            return ('incorrect slightlyLarger');
        } 
    }

    const selectKey = (key) => {
        if (letters.length < 5 && attempts.length !== 6) {
            setLetters([...letters, key]);
        };
    };

    const removeKey = () => {
        if (letters.length > 0) {
            setLetters(letters.slice(0, -1));
        };
    };

    const enterKey = async () => {
        if (letters.length === 5 && attempts.length !== 6 && (/\b[A-Za-z]{5}\b/.test(letters.join('')))) {
            checkIfWord();
        };                
    };

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 5756);
        fetch(words)
        .then(response => response.json())
        .then(text => {
            setAnswer(text[randomNumber].toUpperCase())
            setIsLoading(false);
        })
        .catch(console.error)
    }, []);

    useEffect(() => {
        const temp = []; 
        for (let i = 4; i >= attempts.length; i--) {
            temp.push(['','','','','']);
            setEmptyRows(temp);    
        }
    }, [attempts]);

    // useEffect(() => {
    //     const temp = []; 
    //     for (let i = 4; i >= letters.length; i--) {
    //         temp.push(['']);
    //         setEmptySquares(temp);
    //     }
    // }, [letters]);

    //console.log(emptyRows)
    // console.log(emptySquares);
    //console.log(letters);
    // console.log(attempts);
    // console.log(answer);
    
    return ( 
        <div className='game'>
            {/* Play Wordle! */}
            {isLoading === true && <div></div>}  
            {isLoading !== true && (
            <>
                <div className='tiles'>
                    <div>
                        <AllTiles 
                            attempts = {attempts}
                            displayProgress = {displayProgress}
                        />
                    </div>
                    <div>
                        {attempts.length !== 6 && (
                        <>
                            <div>
                                <CurrentRow 
                                    attempt = {letters}
                                />
                            </div>
                        </>)}
                    </div>
                    <div>
                        {attempts.length < 5 && (
                        <>
                            <div>
                                <AllTiles 
                                    attempts = {emptyRows}
                                    displayProgress = {displayProgress}
                                />
                            </div>
                        </>)}
                    </div>
                </div>
                
                <div>
                    <Keyboard 
                        selectKey = {selectKey}
                        removeKey = {removeKey}
                        enterKey = {enterKey}
                    />
                </div>
            </> 
            )}
        </div>
    );
};