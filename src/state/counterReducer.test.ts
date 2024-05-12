import { appendCounterAC, counterReducer, CounterStateType, resetCounterAC, setMaxCounterAC, setStartCounterAC } from "./counterReducer";

let startState: CounterStateType;

beforeEach(() => {
    startState = {
        start: 0,
        max: 5,
        current: 5
    }
})

test('+1 counter', () => {
    const endState = counterReducer(startState, appendCounterAC())

    expect(endState.current).toBe(5)
})

test('reset counter', () => {
    const endState = counterReducer(startState, resetCounterAC())

    expect(endState.current).toBe(0)
})
test('set max counter', () => {
    const endState = counterReducer(startState, setMaxCounterAC(10))

    expect(endState.current).toBe(5)
    expect(endState.max).toBe(10)
})
test('set start counter', () => {
    const endState = counterReducer(startState, setStartCounterAC(3))

    expect(endState.start).toBe(3)
    expect(endState.current).toBe(5)
    expect(endState.max).toBe(5)
})
