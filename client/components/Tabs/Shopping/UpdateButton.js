import React from 'react';
import {Text, View, Pressable} from 'react-native';
import tailwind from 'tailwind-rn';

export default function UpdateButton(item) {
  return (
    <View>
      <Pressable
        style={tailwind(
          'items-center m-1 w-24 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500',
        )}>
        <Text style={tailwind('text-white text-base font-medium')}>Update</Text>
      </Pressable>
    </View>
  );
}
