import React from 'react';
import {
  Image, View, StyleSheet, Button, Text,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';


const GameOverScreen = (props) => (
  <View style={styles.screen}>
    <TitleText>Fim de Jogo!!</TitleText>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/original.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
    <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>Você jogou
        <Text style={styles.highlight}> {props.roundsNumber} vezes</Text>, e o
        <Text style={styles.highlight}> resultado é {props.userNumber}</Text>.
      </BodyText>
    </View>

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
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',

  },
});

export default GameOverScreen;
