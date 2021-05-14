import React from 'react';
import {Text, View, Image} from 'react-native';
import tailwind from 'tailwind-rn';

const Header = () => {
  return (
    <View style={tailwind('mx-10 my-10')}>
      <View style={tailwind('flex-row justify-center items-center')}>
        <Image
          style={tailwind('h-5 w-5 items-center')}
          source={require('../assets/shopping-bag-pngrepo-com.png')}
        />
        <Text style={tailwind('text-4xl text-yellow-500')}>Bodega</Text>
      </View>
    </View>
  );
};

export default Header;
