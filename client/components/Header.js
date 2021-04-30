import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import tailwind from 'tailwind-rn';

export default function Header() {
  return (
    <View>
      <Image source={{uri: '../assets/shopping-bag-pngrepo-com.png'}} />
      <Text style={tailwind('text-4xl text-yellow-500')}>Bodega</Text>
    </View>
  );
}
