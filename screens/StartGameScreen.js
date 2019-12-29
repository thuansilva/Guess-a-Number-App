/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Text, View, StyleSheet, Button, TextInput,
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = (props) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Novo Jogo</Text>
    <Card style={styles.inputContainer}>
      <Text>Selecionar</Text>
      <TextInput />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Reset"
            color={Colors.accent}
            onPress={() => {}}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Confirmar"
            color={Colors.primary}
            onPress={() => {}}
          />
        </View>
      </View>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,

  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
