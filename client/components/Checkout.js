import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';
import { useDispatch } from "react-redux";
import { checkoutBtn } from "../store/actions/shoppingActions";

export default function Checkout() {
  const dispatch = useDispatch();
  const checkOut = () => {
    dispatch(checkoutBtn());
  };
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center px-5 py-2 border border-transparent rounded-md bg-green-700',
        )}
        onPress={checkOut}
        >
        <Text style={tailwind('text-base font-medium text-white')}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
}
