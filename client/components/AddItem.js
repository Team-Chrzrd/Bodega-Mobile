import React from 'react';
import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';

export default function AddItem() {
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center px-5 py-2 border border-transparent rounded-md bg-blue-700',
        )}>
        <Text style={tailwind('text-white text-base font-medium')}>
          Add Item
        </Text>
      </Pressable>
    </View>
  );
}
