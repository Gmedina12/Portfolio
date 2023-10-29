
import CurrencyAPI from '@everapi/currencyapi-js';
// import { gql } from 'apollo-server-core';

const currencyApi = new CurrencyAPI('cur_live_i6546w4uz2hSa4nxPAuBYiX3WRYMgeRnl1j41e9C'); 


export const resolvers = {
    Query: {
      latestExchangeRate: async (_, { baseCurrency, targetCurrency }) => {
        const response = await currencyApi.latest({
          base_currency: baseCurrency,
          currencies: targetCurrency,
        });
        return response[targetCurrency];
      },
    },
  };
  