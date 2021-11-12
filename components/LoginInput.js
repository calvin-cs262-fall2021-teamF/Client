import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'

const LoginInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 50,
    justifyContent: 'center'
  },
  input: {
    padding: 10
  }
})

export default LoginInput;