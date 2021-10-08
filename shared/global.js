import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },
  button: {
      width: 50,
      height: 50,
      margin:0,
      left: '70%',
      top: 20,
  },
  about: {
      borderRadius: 100,
      borderColor: '#000',
      borderWidth: 2,
      height: 40,
      width: 40,
      alignItems: 'center',
  },
  aboutTxt: {
      padding: 6,
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  }
});
