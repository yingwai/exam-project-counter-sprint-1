import React from 'react';

export const Board = (props: {num: number, max: number}) => {
    return (
        <div className='board' >
            <h1 style={{color: props.num >= props.max ? 'crimson' : ''}}>{props.num}</h1>
        </div>
    );
};