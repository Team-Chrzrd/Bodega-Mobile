const { gql } = require('apollo-server-express');

module.exports = gql`
  type PantryItem {
    _id: Int
    user_id: Int!
    item_name: String!
    note: String
    unit: String!
    qty: Int
    category: String
    par: Int
  }

  extend type Query {
    getPantryItems: [PantryItem!]
  }

  extend type Mutation {
    pantrySubmit(
      itemName: String!
      note: String
      unit: String
      category: String
      qty: String!
      par: String!
    ): SuccessResponse
    pantryUpdate(
      itemId: Int!
      itemName: String!
      note: String
      unit: String
      category: String
      qty: Int!
      par: Int!
    ): SuccessResponse
    pantryQtyUp(itemId: Int!): SuccessResponse
    pantryQtyDown(itemId: Int!): SuccessResponse
    pantryParUp(itemId: Int!): SuccessResponse
    pantryParDown(itemId: Int!): SuccessResponse
    pantryRemove(itemId: Int!): SuccessResponse
  }
`;
