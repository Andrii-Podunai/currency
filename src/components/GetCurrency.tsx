import React from 'react'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from '../header/Header';
import { RootState } from '../store';
import InputCurrencies from './inputCurrency/InputCurrencies';
import { useCurrency } from './useCurrency';

export default function GetCurrency() {
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('UAH');
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);


    const selector = useSelector((state: any) => state.currenciesData.currenciesData)


    useCurrency() //так званий користувацькій хук
    //(використаний трішки не так як завжди, через те що хотів продемонструвати роботу з асинхронним редаксом)


    useEffect(() => {
        if (!!selector) {
            const start = function () {
                changeNumber1(1);
            }
            start();
        }
    }, [selector]);



    const numFixed = (number: any) => {
        return number.toFixed(3);
    }

    const changeNumber1 = (number1: number) => {
        setNumber2(numFixed(number1 * selector[currency2] / selector[currency1]));
        setNumber1(number1);
    }

    const changeNumber2 = (number2: number) => {
        setNumber1(numFixed(+number2 * selector[currency1] / selector[currency2]));
        setNumber2(number2);
    }

    const changeCurrency1 = (currency1: string) => {
        setNumber2(numFixed(number1 * selector[currency2] / selector[currency1]));
        setCurrency1(currency1);
    }

    const changeCurrency2 = (currency2: string) => {
        setNumber1(numFixed(number2 * selector[currency1] / selector[currency2]));
        setCurrency2(currency2);
    }


    return (
        <div>
            <Header currenciesData={selector} />
            <h2 className='header__title' >Конвертер валют</h2>
            <div className="main__group">
                <InputCurrencies
                    changeNumber={changeNumber1}
                    changeCurrency={changeCurrency1}
                    currencies={Object.keys(selector)}
                    number={number1}
                    currency={currency1} />
                <InputCurrencies
                    changeNumber={changeNumber2}
                    changeCurrency={changeCurrency2}
                    currencies={Object.keys(selector)}
                    number={number2}
                    currency={currency2} />
            </div>
        </div>
    )
}
