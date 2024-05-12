import React, { ChangeEvent } from 'react';

type SettingPropsType = {
    max: number
    start: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    isAprove: boolean
}

export const Setting = (props: SettingPropsType) => {
    function onChangeMax(e: ChangeEvent<HTMLInputElement>) {
        props.setMaxValue(+e.currentTarget.value)
    }
    function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
        props.setStartValue(+e.currentTarget.value)
    }

    return (
        <div className='block'>
            <div className='option'>
                max value:
                <input
                    type="number"
                    name="max"
                    id="max"
                    value={props.max}
                    onChange={(e) => onChangeMax(e)}
                    style={props.max < 0 || props.max <= props.start ? { border: "2px solid crimson", backgroundColor: "#f4899d" } : {}}
                />
            </div>
            <div className='option'>
                start value:
                <input
                    type="number"
                    name="start"
                    id="start"
                    value={props.start}
                    onChange={(e) => onChangeStart(e)}
                    style={props.start < 0 || props.max <= props.start ? { border: "2px solid crimson", backgroundColor: "#f4899d" } : {}}
                />
            </div>
        </div>
    );
};