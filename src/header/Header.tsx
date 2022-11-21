import React, { useState, useEffect } from 'react'
import Logo from '../img/logo.png';
import './header.css'

interface IHeader {
    currenciesData: object | any;
}


export default function Header({ currenciesData }: IHeader) {
    const [uahEur, setUahEur] = useState(0)
    const { UAH: uanDollar } = currenciesData

    useEffect(() => {
        if (currenciesData.EUR) {
            setUahEur(((1 * currenciesData["UAH"] / currenciesData["EUR"])))
        }
    }, [currenciesData]);
    return (
        <header className='header'>
            <img src={Logo} />
            <div className='header__currencies'>
                <p className='header__currencies-inner'>USD:{uanDollar == undefined ? '0.00' : uanDollar.toFixed(2)}</p>
                <p className='header__currencies-inner'>EUR:{uahEur == undefined ? '0.00' : uahEur.toFixed(2)}</p>
            </div>
        </header>
    )
}
