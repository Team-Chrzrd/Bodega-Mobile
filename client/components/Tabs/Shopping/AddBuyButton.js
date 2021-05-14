import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {SHOPPING_BUY_UP} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';

// Increments Required stock QTY
const AddBuyButton = ({_id, item_name}) => {
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
        onPress={onButtonClick}
        nativeID={`ShoppingQuantAdd${item_name}`}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default AddBuyButton;
