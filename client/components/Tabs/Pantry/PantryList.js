import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import tailwind from 'tailwind-rn';
import {useSelector, useDispatch} from 'react-redux';
import {getPantryItems} from '../../../store/actions/pantryActions';
import PantryItem from './PantryItem';
import AddItem from '../../AddItem';

export default function PantryListContainer() {
  const pantryItems = useSelector((state) => state.pantry.pantryList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPantryItems());
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
    <PantryItem itemDetails={item} />
  );

  return (
    <View>
       <View style={tailwind('flex flex-row justify-end  py-3 px-3')}>
      <AddItem type="pantry" form="add"/>
      </View>
      <FlatList
        data={pantryItems.sort((a, b) => sortItem(a, b))}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
