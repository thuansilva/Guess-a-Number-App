import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <Text>Fim de Jogo!!</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
