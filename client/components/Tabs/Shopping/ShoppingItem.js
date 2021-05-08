import React from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import Swipeout from 'react-native-swipeout';
import MinusBuyButton from './MinusBuyButton';
import AddBuyButton from './AddBuyButton';
import MinusListButton from './MinusListButton';
import AddListButton from './AddListButton';
import {useMutation} from '@apollo/react-hooks';
import {SHOPPING_REMOVE} from '../../../Queries/Queries';
import useShoppingActions from '../../../hooks/useShoppingActions';

const ShoppingItem = ({itemDetails}) => {
  const {refreshShoppingItems} = useShoppingActions();

  const {
    category,
    item_name,
    list_qty,
    buy_qty,
    unit,
    _id,
    pantry_par,
    pantry_qty,
  } = itemDetails;

  const [shoppingRemove] = useMutation(SHOPPING_REMOVE, {
    onCompleted: () => {
      refreshShoppingItems();
    },
  });

  const onButtonClick = () => {
    shoppingRemove({
      variables: {itemId: _id},
    });
  };

  const swipeOutButtons = [
    {
      text: 'Delete',
      onPress: onButtonClick,
      backgroundColor: '#DC2727',
      color: 'white',
    },
  ];
  return (
    <Swipeout right={swipeOutButtons} backgroundColor={'transparent'} close>
      <View style={tailwind('flex flex-row justify-between px-4 py-4')}>
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
            <Text style={tailwind('mt-2')}>Cart Qty</Text>
            <View style={tailwind('flex justify-center items-center')}>
              <Text style={tailwind('text-3xl font-semibold text-blue-700')}>
                {buy_qty}
              </Text>
              <Text>{unit}</Text>
            </View>
            <View style={tailwind('flex flex-row')}>
              <MinusBuyButton _id={_id} />
              <AddBuyButton _id={_id} />
            </View>
          </View>

          <View
            style={tailwind('flex flex-col justify-center items-center mt-2')}>
            <Text style={tailwind('mt-2')}>Required Qty</Text>
            <View style={tailwind('flex justify-center items-center')}>
              <Text style={tailwind('text-3xl font-semibold text-blue-700')}>
                {list_qty}
              </Text>
              <Text>{unit}</Text>
            </View>

            <View style={tailwind('flex flex-row')}>
              <MinusListButton _id={_id} />
              <AddListButton _id={_id} />
            </View>
          </View>
        </View>
      </View>
    </Swipeout>
  );
};

export default ShoppingItem;
