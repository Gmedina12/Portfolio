import { gql } from 'apollo-server-core';

export const typeDefs = gql`
type Query {
  convertCurrency(
    from: String!
    to: String!
    amount: String!
  ): ConversionResult
}
type ConversionResult {
  status: String
  updated_date: String
  base_currency_code: String
  base_currency_name: String
  amount: String
  rates: CurrencyRates
}

type CurrencyRates {
  currency_name: String
  rate: Float
  rate_for_amount: Float
}`;

