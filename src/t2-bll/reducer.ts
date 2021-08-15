import {cardsAPI, CardType} from "../t3-dal/api";
import {AppThunkType} from "./store";

export type ActionsType = setAppPageActionType
export type initialStateType = {
    icon_url: string
    id: string
    url: string
    value: string
}

const initialState: initialStateType = {
    icon_url: '',
    id: '',
    url: '',
    value: ''
}


export const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'APP/SET-CARD':
            return {...state, ...action.cards}
        default:
            return state
    }
}

export type setAppPageActionType = ReturnType<typeof setAppPageAC>;
export const setAppPageAC = (cards: CardType) => ({type: 'APP/SET-CARD', cards} as const)

// thunk
export const fetchCardsTC = (): AppThunkType => {
    return (dispatch) => {
        cardsAPI.getCards()
            .then((res) => {
                dispatch(setAppPageAC(res.data))
            })
    }
}