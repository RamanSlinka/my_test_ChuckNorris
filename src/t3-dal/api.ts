import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
    withCredentials: true,
})

// api
export const cardsAPI = {
    getCards() {
        return instance.get<CardType>('random');

    }
}

// types
export type CardType = {
    icon_url: string
    id : string
    url : string
    value : string
}