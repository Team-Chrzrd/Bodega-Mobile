import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';

export default function Checkout() {
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center px-5 py-2 border border-transparent rounded-md bg-green-700',
        )}>
        <Text style={tailwind('text-base font-medium text-white')}>
          Checkout
        </Text>
      </Pressable>
    </View>
  );
}
