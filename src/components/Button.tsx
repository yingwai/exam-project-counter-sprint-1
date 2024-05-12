import React from 'react';

type ButtonPropsType = {
    title: string
    disabled?: boolean
    onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    );
};