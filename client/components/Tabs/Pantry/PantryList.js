import React from 'react';
import {View, FlatList} from 'react-native';
import tailwind from 'tailwind-rn';
import PantryItem from './PantryItem';
import AddItem from '../../AddItem';
import usePantryActions from '../../../hooks/usePantryActions';

const PantryListContainer = () => {
  const {pantryItems, data, error} = usePantryActions();

  const sortItem = (a, b) => {
    if (a.item_name < b.item_name) {
      return -1;
    }
    if (a.item_name > b.item_name) {
      return 1;
    }
    return 0;
  };

  const renderItem = ({item}) => <PantryItem itemDetails={item} />;

  return (
    <View>
      <View style={tailwind('flex flex-row justify-end  py-3 px-3')}>
        <AddItem type="pantry" />
      </View>
      <FlatList
        data={pantryItems.sort((a, b) => sortItem(a, b))}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PantryListContainer;
