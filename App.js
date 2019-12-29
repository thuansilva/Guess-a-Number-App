import React from 'react';
import { StyleSheet, View } from 'react-native';


import Header from './components/Header';


export default function App() {
  return (
    <View
      style={styles.screen}
    >
      <Header
        title="Escolha um Numero"
      />
    </View>
  );
}


const styles = StyleSheet.create({
  escreen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
