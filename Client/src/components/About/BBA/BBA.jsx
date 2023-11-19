import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import style from './BBA.module.css'

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
      <div className={style.containertitlesBBA}>
        <p className={style.gradientTextBBATitle}>Background no tech</p>
      </div>
      <div className={style.containerDescript}>
      <p>Crafting my digital space, the currency and unit converters embody the convergence of Business Administration, Web Development, and Mathematics & Physics Education. These tools go beyond functionalities, symbolizing a dynamic synthesis of business insight, coding proficiency, and a commitment to simplifying complex concepts. The currency converter mirrors my passion for economics, while the unit converter reflects my dedication to fostering a love for exact sciences.</p>
    </div>
      <div className={style.containertitlesBBA}>
        <h2 className={style.gradientTextBBASub}>Business Administration and Finance</h2><br/>
      </div>


      <div className={style.containertitlesBBA}>
        <h3 className={style.gradientTextBBASub2}>Currency Converter&nbsp;</h3>💴💵💱:
      </div><br/>

      <div className={style.parent}>
        <div className={style.div1}>
          <label htmlFor="from" className={style.label}>I want to convert: </label>
          <select className={style.selectText} value={from} onChange={e => setFrom(e.target.value)} name='from'>
            <option value="" className={style.selectText} selected disabled hidden>- Select a currency -</option>
            {dataAllC?.getAllCurrencies && [...dataAllC?.getAllCurrencies].sort((a, b) => a.currencyName.localeCompare(b.currencyName)).map(currency => <option value={currency.currencyCode} className={style.selectText}>{currency.currencyName}</option>)}
          </select><br/><br/>
        </div><br/> 

        <div className={style.div4}>
          <label htmlFor='to' className={style.label}>To: </label>
          <select value={to} className={style.selectText} onChange={e => setTo(e.target.value)} name='to'>
            <option value="" selected disabled hidden>- Select a currency -</option>
            {dataAllC?.getAllCurrencies && [...dataAllC?.getAllCurrencies].sort((a, b) => a.currencyName.localeCompare(b.currencyName)).map(currency => <option value={currency.currencyCode} className={style.selectText}>{currency.currencyName}</option>)}
          </select><br/><br/>
        </div><br/>

        <div className={style.div2}>
          <input value={amount} onChange={e => setAmount(e.target.value)} type='number' placeholder="Enter amount to convert" min='0' />
        </div>

        <div className={style.div5}>
          {loading ? <p className={style.loader}></p>
            : error ? <p>Error ❌: {error.message}</p>
              : from && to && amount && amount > 0 ? <div><h5>{data?.convertCurrency.amount} {from} is equivalent to ${data?.convertCurrency.rates?.rate_for_amount} {to}</h5></div> : ''}
        </div>

        <div className={style.div3}>
          <button className={style.Btn} onClick={switchCurrency}>&nbsp;&nbsp;<img width="18" height="18" src="https://img.icons8.com/pastel-glyph/64/ffffff/sorting-arrows-horizontal--v2.png" alt="sorting-arrows--v1" /><p className={style.text}>Switch</p></button>
        </div>
      </div>
    </div>

  );
}



