import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/react-hooks';

const GET_SHOPPING_ITEMS = gql`
  query shoppingItems {
    getItems {
      item_name
      category
      list_qty
      buy_qty
      note
      unit
      _id
      pantry_par
      pantry_qty
    }
  }
`;

function useShoppingActions() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const { data, error, refetch } = useQuery(GET_SHOPPING_ITEMS);

  useEffect(() => {
    if (!error && data?.getItems) {
      setShoppingItems(data.getItems);
    }
  }, [data]);

  return {
    data,
    shoppingItems,
    refreshShoppingItems: refetch,
  };
}

export default useShoppingActions;
