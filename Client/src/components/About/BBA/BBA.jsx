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
  }
`;

export const CurrencyConverter = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const { loading, error, data } = useQuery(CONVERT_CURRENCY, {
    variables: { from, to, amount },
  });

  loading? <p>Loading...</p>
  :error? <p>Error </p>
  :''

  return (
    <div>
     <div>
     <label htmlFor="from">From</label>
     <input value={from} onChange={e => setFrom(e.target.value)} placeholder="From" />
     </div>

      <input value={to} onChange={e => setTo(e.target.value)} placeholder="To" />

      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <p>{data.convertCurrency.amount} {from} is equivalent to {data.convertCurrency.rates.rate_for_amount} {to}</p>
    </div>
  );
}


