import { AnyAction, applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { counterReducer } from './counterReducer'
import { thunk, ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = legacy_createStore(rootReducer, undefined, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

export const useAppDisspatch = () => useDispatch<AppThunkDispatch>()