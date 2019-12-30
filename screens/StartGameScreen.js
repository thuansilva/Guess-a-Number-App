import React, { useState } from 'react';
import {
  Text, View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [cofirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/\D/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert('Número Inválido',
        'O número deve estar entre 1 e 99',
        [{ text: 'Entendi', style: 'destructive', onPress: resetInputHandler }]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setEnteredValue('');
  };

  let confrimatedOutput;

  if (cofirmed) {
    confrimatedOutput = <Text> Numero Escolhido: {selectedNumber}</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Novo Jogo</Text>
        <Card style={styles.inputContainer}>
          <Text>Selecionar</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirmar"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confrimatedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};


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
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
