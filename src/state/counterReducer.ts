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
            return {...state, max: action.value}
        case "SET-START":
            return {...state, start: action.value, current: action.value}
        default:
            return state;
    }
}

export function appendCounterAC() { return { type: 'APPEND' } as const }
export function resetCounterAC() { return { type: 'RESET' } as const }
export function setMaxCounterAC(value: number) { return { type: 'SET-MAX', value } as const }
export function setStartCounterAC(value: number) { return { type: 'SET-START', value } as const }