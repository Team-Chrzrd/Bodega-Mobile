import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useDispatch} from 'react-redux';
import {addQty} from '../../../store/actions/pantryActions';

//Decrements required stock QTY
export default function AddButtonPantry({id}){
     const dispatch = useDispatch();
  return (<View>
    <Pressable
          id="addPantry-btn"
          style={tailwind(
            'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
          )}
          onPress={() => dispatch(addQty(id))}
          >
           <Text>+</Text>
          </Pressable>
  </View>);
};


