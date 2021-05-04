import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {getShoppingItems} from '../../../store/actions/shoppingActions';
import ShoppingItem from '../../Tabs/Shopping/ShoppingItem';

export default function ShoppingListContainer() {
  const shoppingItems = useSelector(state => state.shopping.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  }, []);

  const renderItem = ({ item }) => (
    <ShoppingItem itemDetails={item} />
  );

  return (
    <View>
      <FlatList
        data={shoppingItems.slice(0,10)}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
