import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionsType, appReducer} from "./reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    app: appReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppActionType = ActionsType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AppActionType>


