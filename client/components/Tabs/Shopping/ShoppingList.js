import React from 'react';
import {View, FlatList} from 'react-native';
import tailwind from 'tailwind-rn';
import ShoppingItem from '../../Tabs/Shopping/ShoppingItem';
import AddItem from '../../AddItem';
import Checkout from '../../Checkout';
import useShoppingActions from '../../../hooks/useShoppingActions';

const ShoppingListContainer = () => {
  // Setup gql query
  const {shoppingItems} = useShoppingActions();

  const sortItem = (a, b) => {
    if (a.item_name < b.item_name) {
      return -1;
    }
    if (a.item_name > b.item_name) {
      return 1;
    }
    return 0;
  };

  const renderItem = ({item}) => <ShoppingItem itemDetails={item} />;

  return (
    <View>
      <View style={tailwind('flex flex-row justify-end py-3 px-3')}>
        <AddItem type="shopping" />
        <Checkout />
      </View>
      <FlatList
        data={shoppingItems.sort((a, b) => sortItem(a, b))}
        keyExtractor={(item, _id) => _id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ShoppingListContainer;
