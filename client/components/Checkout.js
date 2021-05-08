import React from 'react';
import {Text, View, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {SHOPPING_CHECKOUT} from '../Queries/Queries';
import useShoppingActions from '../hooks/useShoppingActions';

//Checkout button for shopping list
const Checkout = () => {
  const {refreshShoppingItems} = useShoppingActions();

  const [shoppingCheckout] = useMutation(SHOPPING_CHECKOUT, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingCheckout();
  };
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center px-5 py-2 border border-transparent rounded-md bg-green-700',
        )}
        onPress={onButtonClick}>
        <Text style={tailwind('text-base font-medium text-white')}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
};

export default Checkout;
