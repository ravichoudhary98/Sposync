import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class SignUpView extends Component {

  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
          <TextInput style={styles.inputs}
              placeholder="Game"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(Game) => this.setState({Game})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => Actions.home({})}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={styles.buttonContainer} onPress={() => Actions.login({})}>
            <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:300,
    borderRadius:30,
    backgroundColor:'transparent'
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  },
  btnText:{
    color:"blue",
    fontWeight:'bold'
  }
});
 

/*myValidate =() =>{
    const {Username, password} = this.state;
    if(Username=="" && password=="") {
      Alert.alert('Please fill the Username and Password');
    }

    else if(Username !="ravi" && password != "virus") {
      Alert.alert('Acount not found');
    }

    else if(Username =="ravi" && password == "") {
      Alert.alert('Password Empty');
    }

    else if(Username =="" && password == "virus") {
      Alert.alert('Username Empty');
    }

    else if(Username =="ravi" && password == "virus") {
      this.props.navigation.navigate("profile")
    }

    else {
      Alert.alert('Data not found');
    }
  }
  */