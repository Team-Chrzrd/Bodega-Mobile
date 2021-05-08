import React from 'react';
import {Pressable, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import {PANTRY_PAR_UP} from '../../../Queries/Queries';
import usePantryActions from '../../../hooks/usePantryActions';

//Increments Required Qty in pantry
const AddParPantry = ({_id}) => {
  const {refreshPantryItems} = usePantryActions();

  const [pantryParUp] = useMutation(PANTRY_PAR_UP, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const onButtonClick = () => {
    pantryParUp({
      variables: {itemId: _id},
    });
  };

  return (
    <View>
      <Pressable
        id="addPar-btn"
        style={tailwind(
          'relative items-center px-2 py-2 rounded-md border border-gray-300 bg-white text-sm text-gray-500',
        )}
        onPress={onButtonClick}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default AddParPantry;
