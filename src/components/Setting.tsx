import React, { ChangeEvent } from 'react';

type SettingPropsType = {
    max: string
    start: string
    setMaxValue: (value: string) => void
    setStartValue: (value: string) => void
    isAprove: boolean
}

export const Setting = (props: SettingPropsType) => {
    function onChangeMax(e: ChangeEvent<HTMLInputElement>) {
        props.setMaxValue(e.currentTarget.value)
    }
    function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
        props.setStartValue(e.currentTarget.value)
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
                    style={Number(props.max) < 0 || Number(props.max) <= Number(props.start) ? { border: "2px solid crimson", backgroundColor: "#f4899d" } : {}}
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
                    style={Number(props.start) < 0 || Number(props.max) <= Number(props.start) ? { border: "2px solid crimson", backgroundColor: "#f4899d" } : {}}
                />
            </div>
        </div>
    );
};