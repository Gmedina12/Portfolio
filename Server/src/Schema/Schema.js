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
  rate: String
  rate_for_amount: String
}
type Query {
  convertCurrency(from: String
     to: String
      amount: String): ConversionResult
}

type ConversionResult {
  amount: String
  rates: CurrencyRates
}
type Query {
  getUnitsByGroups (
    group: String!,
  )
  : [String]
}
type Mutation{
  measurementUnits(
    group: String!
    convertFrom: String!
    convertTo: String!
    quantity: Float!): Float
}
type Mutation {
  recieveContactEmail(
    name: String!
    sender: String!
    subject: String!
    message: String!
  ): String
}

type Mutation {
  sendConfirmationEmail(
    sender: String!
    subject: String!): String
}

type Query {
  getConfirmationMessage: String
}`;
