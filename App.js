import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, CheckBox, Button } from 'react-native';


function passwordCheck(var1,var2){ 
 if(var1==var2)
  return (var1);
else {return (
<Text>"Passwords don't match!"</Text>
);
}}

export class user {
  email: String;
  firstName: String;
  lastName: String;
  password: String;
  constructor(props){
    this.state = {email:"", firstName:"", lastName:"", password:""}
  }
}

export default function PageLayout() {
  const [Txtinput, setTxtinput] = useState('');
  var [Email, setEmail] = useState('');
  const text = 'Welcome';
  var email;
  var firstName = '';
  var lastName = '';
  var pass1 = '';
  var pass2 = '';
  var password = '';
   
  return (
    
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View
        style={{
          flex: 2,
          backgroundColor: 'limegreen',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={[
            text.style,
            { fontFamily: 'space-mono', color: 'white', fontSize: 31 },
          ]}>
          {text}
        </Text>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: 'limegreen',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('logo.jpg')} style={{ height: 90, width: 90 }} />
      </View>

      <View
        style={{
          flex: 8,
          backgroundColor: 'limegreen',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 200,
            borderColor: 'gray',
            backgroundColor: 'grey',
            borderWidth: 2,
          }}
          placeholder=" Email Adress"
          onChangeText={Txtinput => setTxtinput(Txtinput)}
          defaultValue={this.Txtinput}
        />
        

        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 200,
            borderColor: 'gray',
            backgroundColor: 'gray',
            borderWidth: 2,
          }}
          placeholder=" First Name"
          onChangeText={Txtinput => setTxtinput(Txtinput)}
          defaultValue={this.Txtinput}
          firstName = {this.Txtinput}
        />

        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 200,
            borderColor: 'gray',
            backgroundColor: 'gray',
            borderWidth: 2,
          }}
          placeholder=" Last Name"
          onChangeText={Txtinput => setTxtinput(Txtinput)}
          defaultValue={this.Txtinput}
          lastName = {this.Txtinput}
        />
        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 200,
            borderColor: 'gray',
            backgroundColor: 'gray',
            borderWidth: 2,
          }}
          placeholder=" Password"
          onChangeText={Txtinput => setTxtinput(Txtinput)}
          defaultValue={this.Txtinput}
          pass1 = {this.Txtinput}
        />
        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 200,
            borderColor: 'grey',
            backgroundColor: 'gray',
            borderWidth: 2,
          }}
          placeholder=" Confirm Password"
          onChangeText={Txtinput => setTxtinput(Txtinput)}
          defaultValue={this.Txtinput}
          pass2 = {this.Txtinput}
          password= {passwordCheck({pass1},{pass2})}
        />
      </View>

      <View style={{ flex: 3, backgroundColor: 'limegreen', justifyContent:'space-evenly',alignItems:'center',}} >
      <View style={{ flexDirection: 'row' }}>
      <CheckBox
      
      />
    <Text style={{marginTop: 5}}> Remember me!</Text>
    </View>
    <Button
    //onPress={}
    title="Submit"
    color="#4b0082"
    
/>
      </View>
   </View>
  );
}
