import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  title: {
    color: '#36C8EC',
    fontSize: 30,
    alignItems: 'center'

  },
  InnerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  StyledContainer: {
    flex: 1,
    padding: 25,
  },
  SubTitle: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 'bold',

  },
  ButtonStyle:{
    padding:15,
    backgroundColor:"#36C8EC",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginVertical:5,
    height:60,
  },

  googleButtonStyle:{
    padding:15,
    backgroundColor:"#2FC651",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginVertical:5,
    height:60,
  },
  MsgBox:{
    textAlign:'center',
    fontSize:13,
  },
  TextLink:{
    color:'#36C8EC',
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
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 25,
  },
  info: {
    marginLeft: 20
  },
  username: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 28,
    fontWeight: 'bold',
  },
  userId: {
    fontSize: 16,
    lineHeight: 14,
    fontWeight: '500',
  },
  setting: {
    marginLeft: 20,
    marginRight: 20,
  },
  settingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  settingBox: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    height: 60,
  },
  settingPicker: {
    height: 50,
    width: 100,
    borderWidth: 0,
    marginRight: -20
  },
  editProfileContainer: {
    marginTop: 20,
  },
  editAvatar: {
    alignItems: 'center',
  },
  picText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 16,
    color: 'blue'
  },
  inputSpan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textTitle: {
    fontSize: 18,
  },
  textInput: {
    width: 240,
    height: 40,
    paddingLeft: 10,
    color: '#05375a',
  }
})
