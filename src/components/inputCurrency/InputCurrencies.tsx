import './inputCurrencies.css';
import React from 'react';

interface CounterProps {
  number: number | string;
  currency: string;
  currencies: Array<number | string>;
  changeNumber: any;
  changeCurrency: (currenci: string) => void;
}


function InputCurrencies({ number, currency, currencies, changeNumber, changeCurrency, }: CounterProps) {
  return (
    <div className="main">
      <input className='main__input' type="text" value={number == 'NaN' ? 0 : number} onChange={e => changeNumber(e.target.value)} />
      <select className='main__select' value={currency} onChange={e => changeCurrency(e.target.value)}>
        {currencies.map((currenci => (
          <option value={currenci}>{currenci}</option>
        )))}
      </select>
    </div>
  );
}

export default InputCurrencies;