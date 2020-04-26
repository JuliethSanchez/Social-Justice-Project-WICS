import * as React from 'react';
import { View, Text, Image, TextInput, Button, event, TouchableOpacity, SafeAreaView } from 'react-native';
import {MaterialCommunityIcons as Icon} from '@expo/vector-icons';
//import ToggleSwitch from 'toggle-switch-react-native';

  const text = 'Welcome';
  const warntext = 'Passwords do not match'
  
export default class PageLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {email:"", firstName: "", lastName:"", password:"", pass1:"",        pass2: "",secureTextEntry:true,secureTextEntry2:true, iconName: 'eye',      iconName2: 'eye',checkState:false, checkName: "checkbox-blank-circle-outline"}
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePass1Change = this.handlePass1Change.bind(this);
    this.handlePass2Change = this.handlePass2Change.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.registerUser=this.registerUser.bind(this);
    this.handleEyePress = this.handleEyePress.bind(this);
    this.handleEyePress2 = this.handleEyePress2.bind(this);
    this.handleCheckPress = this.handleCheckPress.bind(this);
  }
  
  handleEmailChange=(email)=>{this.setState({email})}

  handleFirstNameChange=(firstName)=>{this.setState({firstName})}

  handleLastNameChange=(lastName)=>{this.setState({lastName})}

  handlePass1Change=(pass1)=>{this.setState({pass1})}

  handlePass2Change=(pass2)=>{this.setState({pass2})}

  handleCheckPress=() => {
    let checkName = (this.state.checkState) ? "checkbox-blank-circle-outline" : "checkbox-marked-circle-outline";
    this.setState({checkState:!this.state.checkState, checkName: checkName});
  }

  handleEyePress = ()=> {
    let iconName = (this.state.secureTextEntry) ? "eye-off" : "eye";
    this.setState({secureTextEntry:!this.state.secureTextEntry, 
    iconName: iconName});
    
     }

     handleEyePress2 = ()=> {
    let iconName2 = (this.state.secureTextEntry2) ? "eye-off" : "eye";
    this.setState({secureTextEntry2:!this.state.secureTextEntry2, 
    iconName2: iconName2});
    
     }

  handlepasswordChange=(event)=>{
    if (this.state.pass1!=this.state.pass2) {
     alert("The passwords don't match")
       return false;
      }
  else return true; 
      }
    
    registerUser = () => {
    this.handlepasswordChange(event)
    return (this.state.email + " " + this.state.firstName + " " + this.state.LastName + " " + this.state.password);}

  render(){
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'limegreen'}}>
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
            borderColor: 'white',
            backgroundColor: 'white',
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
            borderColor: 'white',
            backgroundColor: 'white',
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
            borderColor: 'white',
            backgroundColor: 'white',
            borderWidth: 2,
          }}
          placeholder=" Last Name"
          onChangeText={this.handleLastNameChange}
          defaultValue={this.Txtinput}
        />

        <View style={{flexDirection: "row", backgroundColor:'white',            justifyContent:'space-evenly', alignItems:'center'}}>
        <TextInput
          style={{
            height: 30,
            width: 178,
            borderColor: 'white',
            backgroundColor: 'white',
            borderWidth: 2,
          }}
          secureTextEntry={this.state.secureTextEntry}
          placeholder=" Password"
          onChangeText={this.handlePass1Change}
          defaultValue={this.Txtinput}/>
          <TouchableOpacity onPress={() => this.handleEyePress()}>
          <Icon name = {this.state.iconName} size={22} />
          </TouchableOpacity>
          </View>
          
        <View style={{flexDirection: "row", backgroundColor:'white',            justifyContent:'space-evenly', alignItems:'center'}}>
        <TextInput
          style={{
            //flex:1,
            height: 30,
            width: 178,
            borderColor: 'white',
            backgroundColor: 'white',
            borderWidth: 2,
          }}
          secureTextEntry={this.state.secureTextEntry2}
          placeholder=" Confirm Password"
          onChangeText={this.handlePass2Change}
          defaultValue={this.Txtinput}
          //pass2 = {this.Txtinput}
          //password= {passwordCheck({pass1},{pass2})}
        />
        <TouchableOpacity onPress={() => this.handleEyePress2()}>
          <Icon name = {this.state.iconName2} size={22} />
          </TouchableOpacity>
          </View>
      </View>

      <View style={{ flex: 3, backgroundColor: 'limegreen', justifyContent:'space-evenly',alignItems:'center',}} >
      <View style={{ flexDirection: 'row' }}>
      <Text> Remember me! </Text>
      <TouchableOpacity onPress={()=>this.handleCheckPress()}>
      <Icon name = {this.state.checkName} size = {19} />
      </TouchableOpacity>
    </View>
    <Button
    onPress={() => this.registerUser()}
    title="Submit"
    color="#4b0082"
    
/>
      </View>
   </View>
   </SafeAreaView>
  );}
}
