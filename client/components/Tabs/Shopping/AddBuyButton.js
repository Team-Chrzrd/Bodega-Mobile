import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation, gql} from '@apollo/react-hooks';
import {SHOPPING_BUY_UP} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';
import AddButtonPantry from '../Pantry/AddButtonPantry';

// Increments Required stock QTY
const AddBuyButton = ({_id}) => {
  const {refreshShoppingItems} = useShoppingActions();

  const [shoppingBuyUp] = useMutation(SHOPPING_BUY_UP, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingBuyUp({
      variables: {itemId: _id},
    });
  };
  return (
    <View>
      <Pressable
        id="add-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default AddBuyButton;
