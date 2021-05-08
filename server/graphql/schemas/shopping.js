const { gql } = require('apollo-server-express');

module.exports = gql`
  type Item {
    _id: Int
    user_id: Int!
    pantry_id: Int
    item_name: String!
    note: String
    unit: String!
    list_qty: Int!
    buy_qty: Int!
    category: String
    pantry_qty: Int
    pantry_par: Int
  }

  type SuccessResponse {
    success: Boolean!
  }

  extend type Query {
    getItems: [Item!]
    getItem(itemId: Int!): [Item]
  }

  extend type Mutation {
    shoppingSubmit(
      itemName: String!
      note: String
      unit: String
      category: String
      listQty: String!
    ): SuccessResponse
    shoppingUpdate(
      itemId: Int!
      itemName: String!
      note: String
      unit: String
      category: String
      listQty: Int!
    ): SuccessResponse
    shoppingBuyUp(itemId: Int!): SuccessResponse
    shoppingBuyDown(itemId: Int!): SuccessResponse
    shoppingListUp(itemId: Int!): SuccessResponse
    shoppingListDown(itemId: Int!): SuccessResponse
    shoppingRemove(itemId: Int!): SuccessResponse
    shoppingAddFromPantry(itemId: Int!, qty: Int, par: Int): SuccessResponse
    shoppingCheckout: SuccessResponse
  }
`;
