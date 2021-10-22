import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  title: {
    color: '#36C8EC',
    fontSize: 30,
    alignItems: 'center'
    
  },
  InnerContainer:{
    flex:1,
    alignItems:'center',
  },
  StyledContainer:{
    flex:1,
    padding:25,
  },
  SubTitle:{
    fontSize:18,
    marginBottom:20,
    letterSpacing:1,
    fontWeight:'bold',

  },
  TextInput:{
    padding:15,
    paddingRight:55,
    paddingLeft:55,
    borderRadius:5,
    fontSize:16,
    height:60,
    marginVertical:3,
    marginBottom:10,
  }
})
