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
  });

  loading ? <p>Loading...</p>
    : error ? <p>Error </p>
      : ''

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
      <h3>Administración de Empresas y Finanzas 🗒️📊</h3>  
    </div>
    <div>
      <h6>A parte de ser Full-Stack Developer, soy licenciada en Administración de Empresas, con énfasis en finanzas y marketing. Con más de cinco (5) años de experiencia, me apasiona la economía, los movimientos de bolsa, el marketing y el mercado mundial.</h6>  
    </div>
    <div>
      <h4>Conversor de moneda 💴💵💱: </h4>
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

      <input value={amount} onChange={e => setAmount(e.target.value)} type='number' placeholder="Enter amount to convert" />
     <div><p>{data?.convertCurrency.amount} {from} is equivalent to {data?.convertCurrency.rates?.rate_for_amount} {to}</p></div>
     <button onClick={switchCurrency}>🔄</button>

     <div>
      <h6>Aquí he plasmado dos de mis pasiones, creando una mini app con consumo de API Rest... Lo que siga después me inspiro</h6>  
    </div>
    </div>

  );
}


