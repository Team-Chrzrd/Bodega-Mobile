import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {PANTRY_QTY_DOWN} from '../../../Queries/Queries';
import usePantryActions from '../../../hooks/usePantryActions';

// Increments Required stock QTY
const MinusButtonPantry = ({_id, item_name}) => {
  const {refreshPantryItems} = usePantryActions();

  const [pantryQtyDown] = useMutation(PANTRY_QTY_DOWN, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryQtyDown({
      variables: {itemId: _id},
    });
  };

  return (
    <View>
      <Pressable
        id="minusPantry-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text style={tailwind('font-bold')}>-</Text>
      </Pressable>
    </View>
  );
};

export default MinusButtonPantry;
