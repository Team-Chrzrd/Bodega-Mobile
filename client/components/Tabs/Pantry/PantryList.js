import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {getPantryItems} from '../../../store/actions/pantryActions';
import PantryItem from './PantryItem';

export default function PantryListContainer() {
  const pantryItems = useSelector((state) => state.pantry.pantryList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPantryItems());
  }, []);

  const renderItem = ({ item }) => (   
    <PantryItem itemDetails={item} />
  );

  return (
    <View>
      <FlatList
        data={pantryItems.slice(0,10)}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
