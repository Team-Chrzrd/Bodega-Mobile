import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {SHOPPING_LIST_DOWN} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';

//Decrements list QTY
const MinusListButton = ({_id}) => {
  const {refreshShoppingItems} = useShoppingActions();

  const [shoppingListDown] = useMutation(SHOPPING_LIST_DOWN, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingListDown({
      variables: {itemId: _id},
    });
  };

  return (
    <View>
      <Pressable
        id="minusList-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text style={tailwind('font-bold')}>-</Text>
      </Pressable>
    </View>
  );
};

export default MinusListButton;
