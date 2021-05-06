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
  
export default function AddUpdateForm({form}) {
    //setting component state
  const [item_name, setItemName] = useState('');
    const [list_qty, setQuantity] = useState(0);
    const [category, setCategory] = useState('Dairy');
    const [unit, setUnit] = useState('--');
    const [note, setNote] = useState('');
    const [par, setPar] = useState('');
    const [pantryQty, setPantryQty] = useState('');
    // const [selectedCategory, setCategory] = useState('');
    // const [selectedUnit, setUnit] = useState('');

  //onClick Function (Save Changes) to sent user data
  const dispatch = useDispatch();

  //gets the item that is to be updated by id from either pantry or shopping list
  const updatedItem = useSelector(state => state.shopping.updatedItem);

    return (
    <View>
        <SafeAreaView>
            <Text style={tailwind('mt-2 mb-2 text-base font-medium')}>{(form === 'add' ? 'Add' : 'Edit')} Item</Text> 
            <TextInput
               placeholder="Item Name" 
                value={item_name}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full',
                  )}
                onChange={e=> setItemName(e.target.value)}
            >
            </TextInput>
            <TextInput
                placeholder="Quantity"
                value={list_qty}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChange={(e) => setQuantity(e.target.value)}
            >
            </TextInput>
            <TextInput
                placeholder="Stock Amount"
                value={par}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChange={(e) => setPar(e.target.value)}
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
                value={note}
                style={tailwind(
                    'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full'
                )}
                onChange={(e) => setNote(e.target.value)}
            >
            </TextInput>
            <View style={tailwind('flex flex-row justify-center mt-5')}>
            <Pressable style={tailwind('bg-green-500 px-6 py-3 rounded shadow mr-1 mb-1')}>
                <Text style={tailwind(' text-white font-bold uppercase text-sm ')}>Save</Text>
            </Pressable>
            <Pressable style={tailwind('bg-red-700 px-6 py-3 rounded shadow mr-1 mb-1')}>
                <Text style={tailwind(' text-white font-bold uppercase text-sm')}>Close</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    </View>)
}