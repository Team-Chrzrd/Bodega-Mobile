import React from 'react';
import {StyleSheet, Text, View, Button, Pressable, SafeAreaView} from 'react-native';
import tailwind from 'tailwind-rn';
import Swipeout from 'react-native-swipeout';
import AddButtonPantry from './AddButtonPantry';
import MinusButtonPantry from './MinusButtonPantry';
import MinusParPantry from './MinusParPantry';
import AddParPantry from './AddParPantry';
import { useDispatch } from 'react-redux';
import { deletePantryItem } from "../../../store/actions/pantryActions";
import { addFromPantry } from "../../../store/actions/shoppingActions";


export default function PantryItem({itemDetails}) {
  const dispatch = useDispatch();
  const {
    category,
    item_name,
    qty,
    unit,
    _id,
    par
  } = itemDetails;

  const swipeOutButtons = [
    {
      text: "To Cart",
      onPress:() => dispatch(addFromPantry(itemDetails._id)),
      backgroundColor: "#1dd1d1",
      color: "#fff"
    },
    {
      text: "Delete",
      onPress:() => dispatch(deletePantryItem(itemDetails._id)),
      backgroundColor: "#DC2727",
      color: "white"
    }
  ]
  return (
    <Swipeout
        right={swipeOutButtons}
        backgroundColor={"transparent"}
        close
    >
        <SafeAreaView style={tailwind('flex flex-row justify-between px-4 py-4')}>
            <View
                style={tailwind('flex flex-col items-center justify-center')}>
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
                    <MinusButtonPantry id={_id} />
                    <AddButtonPantry id={_id} />
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
                    <MinusParPantry id={_id} />
                    <AddParPantry id={_id} />
                </View>
                </View>
            </View>
        </SafeAreaView>
    </Swipeout>
  );
}
