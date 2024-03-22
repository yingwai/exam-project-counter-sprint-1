import React from 'react';

export const Board = (props: {num: number}) => {
    return (
        <div className='board' >
            <h1 style={{color: props.num >= 5 ? 'crimson' : ''}}>{props.num}</h1>
        </div>
    );
};