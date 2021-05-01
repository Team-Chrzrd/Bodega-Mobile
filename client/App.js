import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Header from './components/Header';
import TabsView from './components/Tabs/Tabs';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
      </View>
      <TabsView />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
