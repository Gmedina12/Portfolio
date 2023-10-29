import { gql } from 'apollo-server-core';


export const typeDefs = gql`
  type Query {
    latestExchangeRate(baseCurrency: String!, targetCurrency: String!): Float
  }
`;