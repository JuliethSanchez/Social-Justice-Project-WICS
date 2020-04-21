import * as React from 'react';
import { View, Text, Image, TextInput, CheckBox, Button } from 'react-native';

  const text = 'Welcome';
  const warntext = 'Passwords do not match'
  
export default class PageLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {email:"", firstName: "", lastName:"", password:"", pass1:"",        pass2: "",}
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePass1Change = this.handlePass1Change.bind(this);
    this.handlePass2Change = this.handlePass2Change.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.registerUser=this.registerUser.bind(this);
  }
  
  handleEmailChange=(email)=>{this.setState({email})}
  handleFirstNameChange=(firstName)=>{this.setState({firstName})}
  handleLastNameChange=(lastName)=>{this.setState({lastName})}
  handlePass1Change=(pass1)=>{this.setState({pass1})}
  handlePass2Change=(pass2)=>{this.setState({pass2})}
  handlepasswordChange=(pass1, pass2, password)=>{
    if (pass1!=pass2) return (<Text
          style={[
            text.style,
          
          ]}>
          {warntext}
        </Text>);
    else this.setState({password: pass1})}
    
    registerUser = () => {
    this.handlepasswordChange
    return "{email} + {firstName} + {LastName} + {Password}";}

  render(){
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
        <Image source={require('./assets/logo.jpg')} style={{ height: 90, width: 90 }} />
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
          value = {this.state.email}
          placeholder=" Email Adress"
          onChangeText={this.handleEmailChange}
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
          onChangeText={this.handleFirstNameChange}
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
          placeholder=" Last Name"
          onChangeText={this.handleLastNameChange}
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
          placeholder=" Password"
          onChangeText={this.handlePass1Change}
          defaultValue={this.Txtinput}
          
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
          onChangeText={this.handlePass2Change}
          defaultValue={this.Txtinput}
          //pass2 = {this.Txtinput}
          //password= {passwordCheck({pass1},{pass2})}
        />
      </View>

      <View style={{ flex: 3, backgroundColor: 'limegreen',           justifyContent:'space-evenly',alignItems:'center',}} >
      <View style={{ flexDirection: 'row' }}>
      <CheckBox
      
      />
    <Text style={{marginTop: 5}}> Remember me!</Text>
    </View>
    <Button
    onPress={() => this.registerUser()}
    title="Submit"
    color="#4b0082"
    
/>
      </View>
   </View>
  );}
}
