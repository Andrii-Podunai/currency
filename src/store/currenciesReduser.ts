import { ADD_CURRENCY } from "./carrencyType"

interface IDefaultstate {
    currenciesData: object
}
type ArticleAction = {
    type: string
    payload: object
}


const defaultstate: IDefaultstate = {
    currenciesData: {}
}


export const currenciesReduser = (state = defaultstate, action: ArticleAction) => {

    switch (action.type) {
        case ADD_CURRENCY:
            return {
                ...state,
                currenciesData: { ...action.payload }
            }
        default: return state
    }
}
