import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import tailwind from 'tailwind-rn';
import AddItem from '../components/AddItem';
import Checkout from '../components/Checkout';

export default function Header() {
  return (
    <View style={tailwind('mx-10 my-10')}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Image
          style={tailwind('h-5 w-5 items-center')}
          source={require('../assets/shopping-bag-pngrepo-com.png')}
        />
        <Text style={tailwind('text-4xl text-yellow-500')}>Bodega</Text>
      </View>
    </View>
  );
}
