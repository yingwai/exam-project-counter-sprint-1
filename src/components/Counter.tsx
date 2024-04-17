import React, { useEffect, useState } from 'react';
import { Board } from './Board';
import { Button } from './Button';
import { infoReadyValueType } from '../App';

type CounterPropsType = {
    max: string
    start: string
    infoReadyValue: infoReadyValueType
}

export const Counter = (props: CounterPropsType) => {
    const [numBoard, setNumBoard] = useState<number>(Number(props.start));
    
    const numBoardMax = numBoard >= Number(props.max);
    
    function fAddCounter() {
        if (numBoardMax) return;
        
        setNumBoard(numBoard + 1)
    }

    function fResetCounter() {
        setNumBoard(Number(props.start))
    }

    useEffect(() => {
        setNumBoard(Number(props.start))
    }, [props.start])

    return (
        <div className='block'>
            {props.infoReadyValue.status === 'ok'
                ? <Board num={numBoard} max={Number(props.max)} />
                : <div className='block'><span style={{ color: props.infoReadyValue.status === 'error' ? 'crimson' : '' }}>{props.infoReadyValue.value}</span></div>
            }

            <div className='block btn'>
                <Button title='inc' onClick={fAddCounter} disabled={numBoardMax || !(props.infoReadyValue.status === 'ok')} />
                <Button title='reset' onClick={fResetCounter} disabled={numBoard === Number(props.start) || !(props.infoReadyValue.status === 'ok')} />
            </div>
        </div>
    );
};