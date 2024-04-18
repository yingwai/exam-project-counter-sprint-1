import React, { useEffect, useState } from 'react';
import { Board } from './Board';
import { Button } from './Button';
import { Setting } from './Setting';

type CounterPropsType = {
}

export const Counter = (props: CounterPropsType) => {
    const [isChangeValue, setIsChangeValue] = useState(false)
    const [maxValue, setMaxValue] = useState(String(localStorage.getItem('maxValue')));
    const [startValue, setStartValue] = useState(String(localStorage.getItem('startValue')));
    const [numBoard, setNumBoard] = useState<number>(Number(startValue));

    const numBoardMax = numBoard >= Number(maxValue);

    function fAddCounter() {
        if (numBoardMax) return;

        setNumBoard(numBoard + 1)
    }

    function fResetCounter() {
        setNumBoard(Number(startValue))
    }

    useEffect(() => {
        setNumBoard(Number(startValue))
    }, [startValue])

    function fSetMaxValue(value: string) {
        setMaxValue(value)
    }

    function fSetStartValue(value: string) {
        setStartValue(value)
    }

    const isAprove = Number(maxValue) < 0 || Number(maxValue) <= Number(startValue)

    function fSaveNewValue() {
        if (isAprove) return

        localStorage.setItem('maxValue', maxValue)
        localStorage.setItem('startValue', startValue)
        setIsChangeValue(!isChangeValue)
    }

    return (
        <div className='block'>
            {!isChangeValue
                ? <Board num={numBoard} max={Number(maxValue)} />
                : <Setting max={maxValue} start={startValue} setMaxValue={fSetMaxValue} setStartValue={fSetStartValue} isAprove />
            }

            <div className='block btn'>
                {!isChangeValue &&
                    <>
                        <Button title='inc' onClick={fAddCounter} disabled={numBoardMax} />
                        <Button title='reset' onClick={fResetCounter} disabled={numBoard === Number(startValue)} />
                    </>
                }
                <Button title='set' onClick={fSaveNewValue} disabled={isAprove} />
            </div>
        </div>
    );
};