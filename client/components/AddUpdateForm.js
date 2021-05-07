import React, { useState } from 'react';
import {Pressable, View, Text, SafeAreaView, TextInput, Picker} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
    addShoppingItem,
    updateShoppingItem,
  } from '../../client/store/actions/shoppingActions';
  import {
    addPantryItem,
    updatePantryItem,
  } from '../../client/store/actions/pantryActions';
import tailwind from 'tailwind-rn';
  
export default function AddUpdateForm({type, hideModal}) {
    //setting component state
  const [item_name, setItemName] = useState('');
    const [list_qty, setQuantity] = useState(0);
    const [category, setCategory] = useState('Dairy');
    const [unit, setUnit] = useState('--');
    const [note, setNote] = useState('');
    const [buy_qty, setCart] = useState('');
    const [pantryQty, setPantryQty] = useState('');

  const dispatch = useDispatch();

  const sendNewItem = () => {
    const dataSet = {
      item_name,
      unit,
      buy_qty,
      list_qty,
      category,
      note,
    };

    console.log('new item', dataSet);

    console.log('form type', type);
    //if the user is clicked on the shopping list tab, send to shopping list DB
    if(type === "shopping") {
        dispatch(addShoppingItem(dataSet));
      }
    //if the user is clicked on the pantry list tab, send to shopping list DB
      else if(type=== "pantry") {
        dispatch(addPantryItem(dataSet));
      }

      hideModal(false);
  };

  
    return (
    <View>
        <SafeAreaView>
            <Text style={tailwind('mt-2 mb-2 text-base font-medium')}>Add New Item</Text> 
            <TextInput
               placeholder="Item Name" 
                defaultValue={item_name}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full',
                  )}
                onChangeText={item_name => setItemName(item_name)}
            >
            </TextInput>
            <TextInput
                placeholder="Required Quantity"
                defaultValue={list_qty}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChangeText={list_qty => setQuantity(list_qty)}
            >
            </TextInput>
            <TextInput
                placeholder="Cart Quantity"
                defaultValue={buy_qty}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChangeText={buy_qty => setCart(buy_qty)}
            >
            </TextInput>
            <View style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}>
            <Picker 
                selectedValue={unit}
                onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}
            >
                <Picker.Item label="--" value="--" />
                <Picker.Item label="oz" value="oz"/>
                <Picker.Item label="lb" value="lb"/>
                <Picker.Item label="each" value="each"/>
                <Picker.Item label="gallon" value="gallon"/>
                <Picker.Item label="gram" value="gram"/>
                <Picker.Item label="dozen" value="dozen" />
                <Picker.Item label="box" value="box"/>
                <Picker.Item label="can" value="can"/>
            </Picker>
            </View>
            <View style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}>
            <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            >
                <Picker.Item label="--" value="--" />
                <Picker.Item label="Dry Goods" value="dryGoods" />
                <Picker.Item label="Canned Goods" value="cannedGoods" />
                <Picker.Item label="Fridge" value="fridge" />
                <Picker.Item label="Frozen" value="frozen" />
                <Picker.Item label="Dairy" value="dairy" />
                <Picker.Item label="Bakery" value="bakery" />
                <Picker.Item label="Deli" value="deli" />
                <Picker.Item label="Meat" value="meat" />
                <Picker.Item label="Produce" value="produce" />
                <Picker.Item label="Alcohol" value="alcohol" />
                <Picker.Item label="Household Supplies" value="householdSupplies" />
                <Picker.Item label="Clothes" value="clothes" />
                <Picker.Item label="Misc." value="misc" />
            </Picker>
            </View>
            <TextInput
                placeholder="Notes"
                defaultValue={note}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChangeText={note => setNote(note)}
            >
            </TextInput>
            <View style={tailwind('flex flex-row justify-center mt-5')}>
            <Pressable 
                style={tailwind('bg-green-500 px-6 py-3 rounded shadow mr-1 mb-1')}
                onPress={sendNewItem}
            >
                <Text style={tailwind(' text-white font-bold uppercase text-sm ')}>Save</Text>
            </Pressable>
            <Pressable style={tailwind('bg-red-700 px-6 py-3 rounded shadow mr-1 mb-1')}>
                <Text style={tailwind(' text-white font-bold uppercase text-sm')}
                onPress = {() => hideModal(false)}>Close</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    </View>)
}