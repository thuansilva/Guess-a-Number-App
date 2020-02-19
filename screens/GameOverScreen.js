import React from 'react';
import {
  Text, View, StyleSheet, Button,
} from 'react-native';

const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <Text>Fim de Jogo!!</Text>
    <Text>O número de rodadas:{props.roundsNumber}</Text>
    <Text>O número era:{props.userNumber}</Text>
    <Button
      title="NOVO JOGO!"
      onPress={props.onRestart}
    />
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
