import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const validateInputs = () => {
    if (number1 === '' || number2 === '') {
      setResult('Error: Both numbers are required');
      return false;
    }
    return true;
  };

  const handleAdd = () => {
    if (validateInputs()) {
      setResult(parseFloat(number1) + parseFloat(number2));
    }
  };

  const handleSubtract = () => {
    if (validateInputs()) {
      setResult(parseFloat(number1) - parseFloat(number2));
    }
  };

  const handleMultiply = () => {
    if (validateInputs()) {
      setResult(parseFloat(number1) * parseFloat(number2));
    }
  };

  const handleDivide = () => {
    if (validateInputs()) {
      if (parseFloat(number2) !== 0) {
        setResult(parseFloat(number1) / parseFloat(number2));
      } else {
        setResult('Error: Division by zero');
      }
    }
  };

  const handleReset = () => {
    setNumber1('');
    setNumber2('');
    setResult(null);
  };

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter first number"
          keyboardType="numeric"
          value={number1}
          onChangeText={setNumber1}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second number"
          keyboardType="numeric"
          value={number2}
          onChangeText={setNumber2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <Button title="Add" onPress={handleAdd} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="Subtract" onPress={handleSubtract} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="Multiply" onPress={handleMultiply} />
          </View>
          <View style={styles.buttonRow}>
            <Button title="Divide" onPress={handleDivide} />
          </View>
        </View>
        <Text style={styles.result}>Result: {result !== null ? result : ''}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen style = {styles.screen} name="Calculator App" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 18,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  buttonRow: {
    marginBottom: 11,
    borderRadius: 18,
    overflow: 'hidden',
  },
  result: {
    fontSize: 15,
    textAlign: 'left',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    borderRadius: 18,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
  screen : {
    textAlign: 'center',
  }
});
