import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {PANTRY_QTY_UP} from '../../../Queries/Queries';
import usePantryActions from '../../../hooks/usePantryActions';

// Increments Required stock QTY
const AddButtonPantry = ({_id}) => {
  const {refreshPantryItems} = usePantryActions();

  const [pantryQtyUp] = useMutation(PANTRY_QTY_UP, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryQtyUp({
      variables: {itemId: _id},
    });
  };

  return (
    <View>
      <Pressable
        id="addPantry-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default AddButtonPantry;
