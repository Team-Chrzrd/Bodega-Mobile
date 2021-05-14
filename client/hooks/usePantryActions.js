import React, {useEffect, useState} from 'react';
import {useQuery, gql} from '@apollo/react-hooks';

const GET_PANTRY_ITEMS = gql`
  query pantryItems {
    getPantryItems {
      item_name
      category
      qty
      note
      unit
      _id
      par
      user_id
    }
  }
`;

function usePantryActions() {
  const [pantryItems, setPantryItems] = useState([]);
  const {data, error, refetch} = useQuery(GET_PANTRY_ITEMS);

  useEffect(() => {
    if (!error && data?.getPantryItems) {
      setPantryItems(data.getPantryItems);
    }
  }, [data]);

  return {
    data,
    error,
    pantryItems,
    refreshPantryItems: refetch,
  };
}

export default usePantryActions;
