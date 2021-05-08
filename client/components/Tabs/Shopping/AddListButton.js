import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {SHOPPING_LIST_UP} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';

//Increments List Quantity
const AddListButton = ({_id}) => {
  const {refreshShoppingItems} = useShoppingActions();

  const [shoppingListUp] = useMutation(SHOPPING_LIST_UP, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingListUp({
      variables: {itemId: _id},
    });
  };

  return (
    <View>
      <Pressable
        id="addList-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default AddListButton;
