import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {getShoppingItems} from '../../../store/actions/shoppingActions';
import ShoppingItem from '../../Tabs/Shopping/ShoppingItem';
import AddItem from '../../AddItem';
import Checkout from '../../Checkout';

export default function ShoppingListContainer() {
  const shoppingItems = useSelector(state => state.shopping.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  }, []);

  const sortItem = (a, b) => {
    if (a.item_name < b.item_name) {
      return -1;
    }
    if (a.item_name > b.item_name) {
      return 1;
    }
    return 0;
  };

  const renderItem = ({ item }) => (
    <ShoppingItem itemDetails={item} />
  );

  return (
    <View>
      <View style={tailwind('flex flex-row justify-end py-3 px-3')}>
      <AddItem type="shopping"/>
      <Checkout />
      </View>
      <FlatList
        data={shoppingItems.sort((a, b) => sortItem(a, b))}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
