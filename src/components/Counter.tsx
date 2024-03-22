import React, { useState } from 'react';
import { Board } from './Board';
import { Button } from './Button';

export const Counter = () => {
    let [numBoard, setNumBoard] = useState<number>(0);

    const numBoardMax = numBoard >= 5;

    function fAddCount() {
        if (numBoardMax) return;

        setNumBoard(++numBoard)
    }

    return (
        <div className='block'>
            <Board num={numBoard} />

            <div className='block btn'>
                <Button title='inc' onClick={() => fAddCount()} disabled={numBoardMax} />
                <Button title='reset' onClick={() => setNumBoard(0)} disabled={numBoard === 0} />
            </div>
        </div>
    );
};