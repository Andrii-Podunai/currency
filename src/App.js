import InputCurrencies from "./InputCurrencies";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from './header/Header';

function App() {
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(1);
  const [currenciesData, setcurrenciesData] = useState([]);

  const key = 'MhFzIWilwKH0JQxB9ELCx2i0RmhHAsW3'

  useEffect(() => {
    axios.get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${key}`)
      .then(res => {
        setcurrenciesData(res.data.rates);
      })
  }, []);

  useEffect(() => {
    if (!!currenciesData) {
      function start() {
        changeNumber1(1);
      }
      start();
    }
  }, [currenciesData]);



  const numFixed = (number) => {
    return number.toFixed(3);
  }

  const changeNumber1 = (number1) => {
    setNumber2(numFixed(number1 * currenciesData[currency2] / currenciesData[currency1]));
    setNumber1(number1);
  }

  const changeNumber2 = (number2) => {
    setNumber1(numFixed(number2 * currenciesData[currency1] / currenciesData[currency2]));
    setNumber2(number2);
  }

  const changeCurrency1 = (currency1) => {
    setNumber2(numFixed(number1 * currenciesData[currency2] / currenciesData[currency1]));
    setCurrency1(currency1);
  }

  const changeCurrency2 = (currency2) => {
    setNumber1(numFixed(number2 * currenciesData[currency1] / currenciesData[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div>
      <Header numFixed={numFixed} currenciesData={currenciesData} />
      <h2 className='header__title' >Конвертер валют</h2>
      <div className="main__group">
        <InputCurrencies
          changeNumber={changeNumber1}
          changeCurrency={changeCurrency1}
          currencies={Object.keys(currenciesData)}
          number={number1}
          currency={currency1} />
        <InputCurrencies
          changeNumber={changeNumber2}
          changeCurrency={changeCurrency2}
          currencies={Object.keys(currenciesData)}
          number={number2}
          currency={currency2} />
      </div>
    </div>
  );
}

export default App;
