import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Header from './components/Header';
import TabsView from './components/Tabs/Tabs';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://10.0.2.2:3000/api/graphql/',
});

const client = new ApolloClient({
  cache,
  link,
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
        </View>
        <TabsView />
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
