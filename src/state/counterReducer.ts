import { Dispatch } from "redux";
import { AppRootStateType } from "./store";

export type CounterStateType = {
    start: number
    max: number
    current: number
}

type ActionsCounterType = appendCounterType
    | resetCounterType
    | setMaxCounterType
    | setStartCounterType;

type appendCounterType = ReturnType<typeof appendCounterAC>;
type resetCounterType = ReturnType<typeof resetCounterAC>;
type setMaxCounterType = ReturnType<typeof setMaxCounterAC>;
type setStartCounterType = ReturnType<typeof setStartCounterAC>;

const initCounterState = {
    start: 0,
    max: 5,
    current: 0
}

export function counterReducer(state = initCounterState, action: ActionsCounterType) {
    switch (action.type) {
        case 'APPEND':
            if (state.current >= state.max) return state;

            return { ...state, current: state.current + 1 }
        case "RESET":
            return { ...state, current: state.start }
        case "SET-MAX":
            return { ...state, max: action.value }
        case "SET-START":
            return { ...state, start: action.value, current: action.value }
        default:
            return state;
    }
}

export const appendCounterAC = () => { return { type: 'APPEND' } as const }
export const resetCounterAC = () => { return { type: 'RESET' } as const }
export const setMaxCounterAC = (value: number) => { return { type: 'SET-MAX', value } as const }
export const setStartCounterAC = (value: number) => { return { type: 'SET-START', value } as const }

export const getLocalstorageValueTC = () => (dispatch: Dispatch) => {
    dispatch(setStartCounterAC(JSON.parse(localStorage.getItem('startValue')!)))
    dispatch(setMaxCounterAC(JSON.parse(localStorage.getItem('maxValue')!)))
}
export const saveLocalstorageValueTC = () => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    localStorage.setItem('maxValue', JSON.stringify(getState().counter.max))
    localStorage.setItem('startValue', JSON.stringify(getState().counter.start))
}