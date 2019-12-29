import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Escolha um Número" />
      <StartGameScreen />
    </View>


  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
