import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useDispatch} from 'react-redux';
import {minusBuyQty} from '../../../store/actions/shoppingActions';

//Decrements required stock QTY
export default function MinusBuyButton({id}){
     const dispatch = useDispatch();
  return (<View>
    <Pressable
          id="minus-btn"
          style={tailwind(
            'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
          )}
          onPress={() => dispatch(minusBuyQty(id))}>
           <Text style={tailwind('font-bold')}>-</Text>
          </Pressable>
  </View>);
};


