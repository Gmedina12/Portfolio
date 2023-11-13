import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const CONVERT_CURRENCY = gql`
  query ConvertCurrency($from: String!, $to: String!, $amount: String!) {
    convertCurrency(from: $from, to: $to, amount: $amount) {
      status
      updated_date
      base_currency_code
      base_currency_name
      amount
      rates {
        currency_name
        rate
        rate_for_amount
      }
    }
  }`;

const GET_ALL_CURRENCY = gql`
query getAllCurrencies {
  getAllCurrencies {
    currencyCode
    currencyName
  }
}`;

export const CurrencyConverter = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const { loading, error, data } = useQuery(CONVERT_CURRENCY, {
    variables: { from, to, amount },
    skip: !from || !to || !amount || amount <= 0,
  });

  const { loading: loadingAllC, error: errorAllC, data: dataAllC } = useQuery(GET_ALL_CURRENCY);

  const switchCurrency = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div>
    <div>
      <h2>Background no tech</h2>
    </div>
    <div>
      <h3>Business Administration and Finance 🗒️📊</h3>  
    </div>
    <div>
      <h6>In addition to being a Full-Stack Developer, I hold a degree in Business Administration with a focus on finance and marketing. With over five (5) years of experience, I am passionate about economics, stock market trends, marketing, and the global market.</h6>  
    </div>
    <div>
      <h4>Currency Converter 💴💵💱: </h4>
    </div>
      <div>
        <label htmlFor="from">Convert Currency from: </label>
        <select value={from} onChange={e => setFrom(e.target.value)} name='from'>
          <option value="" selected disabled hidden>- Select a currency -</option>
          {dataAllC?.getAllCurrencies && [...dataAllC?.getAllCurrencies].sort((a,b)=> a.currencyName.localeCompare(b.currencyName)).map(currency => <option value={currency.currencyCode}>{currency.currencyName}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor='to'>Convert Currency to: </label>
        <select value={to} onChange={e => setTo(e.target.value)} name='to'>
          <option value="" selected disabled hidden>- Select a currency -</option>
          {dataAllC?.getAllCurrencies && [...dataAllC?.getAllCurrencies].sort((a,b)=> a.currencyName.localeCompare(b.currencyName)).map(currency => <option value={currency.currencyCode}>{currency.currencyName}</option>)}
        </select>
      </div>

      <input value={amount} onChange={e => setAmount(e.target.value)} type='number' placeholder="Enter amount to convert" min='0' />
      {loading ? <p>Calculating 💱...</p>
        : error ? <p>Error ❌: {error.message }</p>
          : from && to && amount && amount > 0 ? <div><p>{data?.convertCurrency.amount} {from} is equivalent to ${data?.convertCurrency.rates?.rate_for_amount} {to}</p></div> : ''}
     <button onClick={switchCurrency}>🔄</button>
    </div>

  );
}


