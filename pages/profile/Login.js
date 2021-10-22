import React from "react";
import { profileStyles } from './profileStyles';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
//formik
import{Formik} from 'formik';
//icons
import {Octicons} from '@expo/vector-icons';

const Login = () => {
  return(
    <View style={profileStyles.StyledContainer}>
      <View style={profileStyles.InnerContainer}>
          <Text style={profileStyles.title}>
            Toothflex
          </Text>
          <Text style ={profileStyles.SubTitle}>
            Account Login
          </Text>

          <Formik
          initialValues = {{email:'',password:''}}
          onSubmit={(values)=> {
            console.log(values);
          }}
          >
          {({handleChange, handleBlur, handleSubmit, values}) => <styledFormArea>
            <TextInput style = {profileStyles.TextInput}
                label ="Email Address"
                icon = "mail"
                placeholder="abc@gmail.com"
                placeholderTextcolor = 'gray'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value ={values.email}
                keyboardType="email-address"
                />
                <TextInput style = {profileStyles.TextInput}
                label ="password"
                icon = "lock"
                placeholder="**********"
                placeholderTextcolor = 'gray'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value ={values.password}
                secureTextEntry={true}
                />


              </styledFormArea>}
          

          </Formik>


      </View>
    
    </View>

  );
}
const MyTextInput = ({label,icon,...props}) =>{
  return (<View>
    <TouchableOpacity>
      <Octicons name ={icon} size={30}/>

    </TouchableOpacity>
    <Text>{label}</Text>
  </View>);

};

export default Login;
