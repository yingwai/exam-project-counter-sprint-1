import React, { useEffect, useState } from 'react';
import { Board } from './Board';
import { Button } from './Button';
import { Setting } from './Setting';
import { useSelector } from 'react-redux';
import { AppRootStateType, useAppDisspatch } from '../state/store';
import { appendCounterAC, getLocalstorageValueTC, resetCounterAC, saveLocalstorageValueTC, setMaxCounterAC, setStartCounterAC } from '../state/counterReducer';

export const Counter = () => {
    const [isChangeValue, setIsChangeValue] = useState(false)

    const { start, max, current } = useSelector((state: AppRootStateType) => state.counter);
    const dispatch = useAppDisspatch()

    useEffect(() => {
        dispatch(getLocalstorageValueTC())
    }, [dispatch])

    const numBoardMax = current >= max;

    function fAddCounter() {
        dispatch(appendCounterAC())
    }

    function fResetCounter() {
        dispatch(resetCounterAC())
    }

    function fSetMaxValue(value: number) {
        dispatch(setMaxCounterAC(value))
    }

    function fSetStartValue(value: number) {
        dispatch(setStartCounterAC(value))
    }

    const isAprove = max < 0 || max <= start;

    function fSaveNewValue() {
        if (isAprove) return

        dispatch(saveLocalstorageValueTC())
        setIsChangeValue(!isChangeValue)
    }

    return (
        <div className='block'>
            {!isChangeValue
                ? <Board num={current} max={max} />
                : <Setting max={max} start={start} setMaxValue={fSetMaxValue} setStartValue={fSetStartValue} isAprove />
            }

            <div className='block btn'>
                {!isChangeValue &&
                    <>
                        <Button title='inc' onClick={fAddCounter} disabled={numBoardMax} />
                        <Button title='reset' onClick={fResetCounter} disabled={current === start} />
                    </>
                }
                <Button title='set' onClick={fSaveNewValue} disabled={isAprove} />
            </div>
        </div>
    );
};