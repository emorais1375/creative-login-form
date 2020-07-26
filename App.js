import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={{ marginHorizontal: 8, elevation: 8 }}>
        <Card.Content>
          <TextInput style={styles.input} placeholder="username"></TextInput>
          <TextInput style={styles.input} placeholder="password"></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Hello, world!')}>
            <Text style={{ color: '#fafdfb' }}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.baseText}>
            Not registered?
            <Text style={styles.innerText}> Create an account</Text>
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#ffffff',
    backgroundColor: '#68be4c',
  },
  input: {
    height: 40,
    marginVertical: 8,
    paddingHorizontal: 15,
    borderColor: 'green',
    backgroundColor: '#f2f2f2',
    color: '#bcbcbc',
  },
  innerText: {
    color: '#5cc573',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00b241',
    marginVertical: 8,
    color: '#fafdfb',
    padding: 10,
  },
  baseText: {
    textAlign: 'center',
    color: '#bcbcbc',
    marginVertical: 8,
    borderColor: 'green',
  },
});
