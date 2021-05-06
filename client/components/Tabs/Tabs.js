import * as React from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ShoppingListContainer from './Shopping/ShoppingList';
import PantryListContainer from './Pantry/PantryList';

const ShoppingList = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <ShoppingListContainer />
  </View>
);

const PantryList = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <PantryListContainer />
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  shopping: ShoppingList,
  pantry: PantryList,
});

export default function TabsView() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'shopping', title: 'Shopping List'},
    {key: 'pantry', title: 'Pantry List'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
      swipeEnabled={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
