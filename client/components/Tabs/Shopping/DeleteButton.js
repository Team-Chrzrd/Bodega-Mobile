import React from 'react';
import {Text, View, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';

export default function DeleteButton({id}) {
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center w-24 m-1 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-opacity-100 bg-yellow-500',
        )}>
        <Text style={tailwind('text-white text-base font-medium')}>Delete</Text>
      </Pressable>
    </View>
  );
}
