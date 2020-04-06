import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = (props) => <Text style={styles.title}>{props.children} </Text>;

const styles = StyleSheet({
  title: {
    fontFamily: 'open-sans-bold',
    fonstSize: 18,
  },
});

export default BodyText;
