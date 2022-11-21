import { addCurrenciesReduser } from "../store/carrencyAction";
import axios from "axios";

const key: string = 'Wenu7AG5YBO1nSJnGyEU4WKxOKFwSeJl'

export const fetchCurrencies = () => {
    return async (dispatch: any) => {
        const res: any = await axios.get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${key}`)
        dispatch(addCurrenciesReduser(res.data.rates));
    }
}
