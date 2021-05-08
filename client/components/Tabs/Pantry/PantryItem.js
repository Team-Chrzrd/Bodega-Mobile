import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import tailwind from 'tailwind-rn';
import Swipeout from 'react-native-swipeout';
import AddButtonPantry from './AddButtonPantry';
import MinusButtonPantry from './MinusButtonPantry';
import MinusParPantry from './MinusParPantry';
import AddParPantry from './AddParPantry';
import {useMutation} from '@apollo/react-hooks';
import {PANTRY_REMOVE} from '../../../Queries/Queries';
import {ADD_FROM_PANTRY} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';
import usePantryActions from '../../../hooks/usePantryActions';

const PantryItem = ({itemDetails}) => {
  const {category, item_name, qty, unit, _id, par} = itemDetails;

  const {refreshShoppingItems} = useShoppingActions();
  const {refreshPantryItems} = usePantryActions();

  const [shoppingAddFromPantry] = useMutation(ADD_FROM_PANTRY, {
    onCompleted: () => {
      showAlert(true);
      // setTimeout(showAlert(false), 3000);
      refreshShoppingItems();
    },
  });

  const [pantryRemove] = useMutation(PANTRY_REMOVE, {
    onCompleted: () => {
      refreshPantryItems();
    },
  });

  const addToShoppingfromPantry = () => {
    shoppingAddFromPantry({
      variables: {itemId: _id, qty, par},
    });
  };

  const deletePantryItem = () => {
    pantryRemove({
      variables: {itemId: _id},
    });
  };

  const swipeOutButtons = [
    {
      text: 'To Cart',
      onPress: addToShoppingfromPantry,
      backgroundColor: '#1dd1d1',
      color: '#fff',
    },
    {
      text: 'Delete',
      onPress: deletePantryItem,
      backgroundColor: '#DC2727',
      color: 'white',
    },
  ];
  return (
    <Swipeout right={swipeOutButtons} backgroundColor={'transparent'} close>
      <SafeAreaView style={tailwind('flex flex-row justify-between px-4 py-4')}>
        <View style={tailwind('flex flex-col items-center justify-center')}>
          <Text style={tailwind('flex items-center text-sm text-gray-500')}>
            {category}
          </Text>
          <Text style={tailwind('text-lg font-bold text-blue-700')}>
            {item_name}
          </Text>
        </View>

        <View style={tailwind('flex flex-row justify-around w-2/5')}>
          <View
            style={tailwind('flex flex-col justify-center items-center mt-2')}>
            <Text style={tailwind('mt-2')}>Pantry Qty</Text>
            <View style={tailwind('flex justify-center items-center')}>
              <Text style={tailwind('text-3xl font-semibold text-blue-700')}>
                {qty}
              </Text>
              <Text>{unit}</Text>
            </View>
            <View style={tailwind('flex flex-row')}>
              <MinusButtonPantry _id={_id} />
              <AddButtonPantry _id={_id} />
            </View>
          </View>

          <View
            style={tailwind('flex flex-col justify-center items-center mt-2')}>
            <Text style={tailwind('mt-2')}>Required Qty</Text>
            <View style={tailwind('flex justify-center items-center')}>
              <Text style={tailwind('text-3xl font-semibold text-blue-700')}>
                {par}
              </Text>
              <Text>{unit}</Text>
            </View>

            <View style={tailwind('flex flex-row')}>
              <MinusParPantry _id={_id} />
              <AddParPantry _id={_id} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Swipeout>
  );
};

export default PantryItem;
