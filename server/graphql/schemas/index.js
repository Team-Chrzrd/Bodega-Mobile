const { gql } = require('apollo-server-express');

const shoppingType = require('./shopping');
const pantryType = require('./pantry');

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [rootType, shoppingType, pantryType];
