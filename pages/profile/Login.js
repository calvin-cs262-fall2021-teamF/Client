import React,{useState} from "react";
import { profileStyles } from './profileStyles';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
//formik
import { Formik } from 'formik';
//icons
import {Ionicons, Octicons, Fontisto} from '@expo/vector-icons';

export const Login = () => {
    const [hidePassword,setHidePassword] = useState(true);
  return(
    <View style={profileStyles.StyledContainer}>
      <View style={profileStyles.InnerContainer}>
        <Text style={profileStyles.title}>
          Toothflex
        </Text>
        <Text style={profileStyles.SubTitle}>
          Account Login
        </Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
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
                secureTextEntry={hidePassword}
                isPassword ={true}
                hidePassword={hidePassword}
                setHidePassword ={setHidePassword}
                />
                <Text style={profileStyles.MsgBox}>
                  ...
                </Text>
                <TouchableOpacity style={profileStyles.ButtonStyle}onPress={handleSubmit}>
                  <Text>
                    Login
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={profileStyles.googleButtonStyle}onPress={handleSubmit}>
                  <Fontisto name="google" size={15}/>
                  <Text google={true}>
                    Sign in with Google
                  </Text>
                </TouchableOpacity>
                <View>
                  <Text>
                    Don't have an account alreday?
                  </Text>
                    <TouchableOpacity style={profileStyles.TextLink}>
                      Signup
                    </TouchableOpacity>
                </View>

          </styledFormArea>}


        </Formik>


      </View>

    </View>

  );
}

const MyTextInput = ({label,icon, hidePassword,setHidePassword,...props}) =>{
  return (<View>
    <TouchableOpacity>
      <Octicons name={icon} size={30} />

    </TouchableOpacity>
    <Text>{label}</Text>
    <TextInput {...props}/>
    {isPassword && (
      <View onPress={() => setHidePassword(!hidePassword)}>
        <Ionicons name={hidePassword ? 'md-eye-off' :'md-eye'} size={30} color= {"black"}/>
      </View>
    )}

  </View>);

};
