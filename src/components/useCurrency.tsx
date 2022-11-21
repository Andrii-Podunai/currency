import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrencies } from "../asyncActions/fetchCurrencies";


export function useCurrency() {
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrencies())
    }, []);
}