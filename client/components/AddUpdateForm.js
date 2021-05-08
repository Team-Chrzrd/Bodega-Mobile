import React, {useState} from 'react';
import {
  Pressable,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Picker,
} from 'react-native';
import tailwind from 'tailwind-rn';
import {useMutation} from '@apollo/react-hooks';
import useShoppingActions from '../hooks/useShoppingActions';
import usePantryActions from '../hooks/usePantryActions.js';
import {SHOPPING_SUBMIT, PANTRY_SUBMIT} from '../Queries/Queries';

const AddUpdateForm = ({type, hideModal}) => {
  const {refreshShoppingItems} = useShoppingActions();
  const {refreshPantryItems} = usePantryActions();

  const [shoppingSubmit] = useMutation(SHOPPING_SUBMIT, {
    onCompleted: () => {
      refreshShoppingItems();
      hideModal(false);
    },
  });

  const [pantrySubmit] = useMutation(PANTRY_SUBMIT, {
    onCompleted: () => {
      refreshPantryItems();
      hideModal(false);
    },
  });

  //setting component state
  const [item_name, setItemName] = useState('');
  const [list_qty, setQuantity] = useState(0);
  const [category, setCategory] = useState('Dairy');
  const [unit, setUnit] = useState('--');
  const [note, setNote] = useState('');
  const [min_qty, setCart] = useState('');
  const [pantryQty, setPantryQty] = useState('');

  const sendNewItem = () => {
    //if the user is clicked on the shopping list tab, send to shopping list DB
    if (type === 'shopping') {
      shoppingSubmit({
        variables: {
          itemName: item_name,
          note,
          unit,
          category,
          listQty: list_qty,
        },
      });
    }
    //if the user is clicked on the pantry list tab, send to shopping list DB
    else if (type === 'pantry') {
      pantrySubmit({
        variables: {
          itemName: item_name,
          note,
          unit,
          category,
          qty: pantryQty,
          par: min_qty,
        },
      });
    }
  };

  return (
    <View>
      <SafeAreaView>
        <Text style={tailwind('mt-3 mb-3 text-3xl font-bold text-gray-700')}>
          Add New Item
        </Text>
        <TextInput
          placeholder="Item Name"
          defaultValue={item_name}
          style={tailwind(
            'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full text-base',
          )}
          onChangeText={item_name => setItemName(item_name)}></TextInput>

        {type === 'shopping' && (
          <TextInput
            placeholder="Required Quantity"
            defaultValue={list_qty}
            style={tailwind(
              'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full text-base',
            )}
            onChangeText={list_qty => setQuantity(list_qty)}></TextInput>
        )}
        {type === 'pantry' && (
          <TextInput
            placeholder="Required Stock Quantity"
            defaultValue={min_qty}
            style={tailwind(
              'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full text-base',
            )}
            onChangeText={min_qty => setCart(min_qty)}></TextInput>
        )}
        {type === 'pantry' && (
          <TextInput
            placeholder="Pantry Quantity"
            defaultValue={pantryQty}
            style={tailwind(
              'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full text-base',
            )}
            onChangeText={pantryQty => setPantryQty(pantryQty)}></TextInput>
        )}

        <View
          style={tailwind(
            'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full',
          )}>
          <Picker
            selectedValue={unit}
            onValueChange={(itemValue, itemIndex) => setUnit(itemValue)}>
            <Picker.Item label="--" value="--" />
            <Picker.Item label="oz" value="oz" />
            <Picker.Item label="lb" value="lb" />
            <Picker.Item label="each" value="each" />
            <Picker.Item label="gallon" value="gallon" />
            <Picker.Item label="gram" value="gram" />
            <Picker.Item label="dozen" value="dozen" />
            <Picker.Item label="box" value="box" />
            <Picker.Item label="can" value="can" />
          </Picker>
        </View>
        <View
          style={tailwind(
            'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full',
          )}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
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
            'mt-2 px-2 py-2 border-2 border-gray-300 h-12 w-full text-base',
          )}
          onChangeText={note => setNote(note)}></TextInput>
        <View style={tailwind('flex flex-row justify-center mt-5')}>
          <Pressable
            style={tailwind('bg-green-500 px-6 py-3 rounded mr-1 mb-1')}
            onPress={sendNewItem}>
            <Text style={tailwind(' text-white font-bold uppercase text-sm ')}>
              Save
            </Text>
          </Pressable>
          <Pressable style={tailwind('bg-red-700 px-6 py-3 rounded mr-1 mb-1')}>
            <Text
              style={tailwind(' text-white font-bold uppercase text-sm')}
              onPress={() => hideModal(false)}>
              Close
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AddUpdateForm;
