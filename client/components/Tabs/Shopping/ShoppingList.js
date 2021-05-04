import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {getShoppingItems} from '../../../store/actions/shoppingActions';
// import {ShoppingItem} from '../../Tabs/Shopping/ShoppingItem';

export default function ShoppingListContainer() {
  const shoppingItems = useSelector(state => state.shopping.shoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingItems());
  }, []);

  return (
    <View>
      <FlatList
        data={shoppingItems}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={item => (
          <Text style={tailwind('text-white')}>{item.item.item_name}</Text>
        )}
      />
      {/* <ul className="divide-y divide-gray-200">
        {shoppingItems
          .sort((a, b) => sortItem(a, b))
          .map((item, i) => {
            return <ShoppingItem key={`item${i}`} newItem={item} />;
          })}
      </ul> */}
    </View>
  );
}
