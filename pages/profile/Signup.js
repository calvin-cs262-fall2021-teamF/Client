import React,{useState} from "react";
import { profileStyles } from './profileStyles';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
//formik
import{Formik} from 'formik';
//icons
import {Ionicons, Octicons, Fontisto} from '@expo/vector-icons';
//Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

export const Signup = () => {
    const [hidePassword,setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date,setDate] = useState(new Date(2000,0,1));

    //Actual date of birth to be sent
    const [dob,setDob] = useState();
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      setDob(currentDate);
    }




    const showDatePicker = () => {
      setShow(true);
    }
  return(
    <View style={profileStyles.StyledContainer}>
      <View style={profileStyles.InnerContainer}>
          <Text style={profileStyles.title}>
            Toothflex
          </Text>
          <Text style ={profileStyles.SubTitle}>
            Account Sign up
          </Text>

          {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

          <Formik
          initialValues = {{fullName:'',email:'',dateOfBirth:'', password:'',confirmpassword:''}}
          onSubmit={(values)=> {
            console.log(values);
          }}
          >
          {({handleChange, handleBlur, handleSubmit, values}) => <styledFormArea>
              <TextInput style = {profileStyles.TextInput}
              label ="Full Name"
              icon = "person"
              placeholder="Amy Black"
              placeholderTextcolor = 'gray'
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value ={values.fullName}
              />
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
              label ="Date of Birth"
              icon = "calendar"
              placeholder="YYYY-MM-DD"
              placeholderTextcolor = 'gray'
              onChangeText={handleChange('dateOfBirth')}
              onBlur={handleBlur('DateOfBirth')}
              value ={dob ? dob.toDateString() : ''}
              isDate={true}
              editable={false}
              showDatePicker={showDatePicker}
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
              <TextInput style = {profileStyles.TextInput}
              label ="confirm password"
              icon = "lock"
              placeholder="**********"
              placeholderTextcolor = 'gray'
              onChangeText={handleChange('confirmpassword')}
              onBlur={handleBlur('confirmpassword')}
              value ={values.confirmpassword}
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
              <View>
                <Text>
                  Already have an account?
                </Text>
                  <TouchableOpacity style={profileStyles.TextLink}>
                    Log in
                  </TouchableOpacity>
              </View>


            </styledFormArea>}
        

        </Formik>


      </View>
    
    </View>

  );
}
const MyTextInput = ({label,icon, hidePassword,setHidePassword,isDate,showDatePicker,...props}) =>{
  return (<View>
    <TouchableOpacity>
      <Octicons name ={icon} size={30}/>

    </TouchableOpacity>
    <Text>{label}</Text>
    {!isDate && <TextInput {...props}/>}
    {isDate && (
      <TouchableOpacity onPress={showDatePicker}>
        <TextInput {...props}/>
        </TouchableOpacity>)}

    {isPassword && (
      <View onPress={() => setHidePassword(!hidePassword)}>
        <Ionicons name={hidePassword ? 'md-eye-off' :'md-eye'} size={30} color= {"black"}/>
      </View>
    )}

  </View>);

};

export default Signup;