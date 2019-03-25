import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  Video
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      emailValdate:true,
      password: '',
      passwordValdate:true,
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", ""+viewId);
  }
  validate(email,type){
    alpha = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    num = /^[0-9]+$/
    if(type=='email-address')
    {
      if(alpha.test(email))
      {
        this.setState({
          emailValdate:true,
        })
      }
      else
      {
        this.setState({
          emailValdate:false,
        })
      }
    }
    else if(type=='password')
    {
      if(num.test(email))
      {
        this.setState({
          passwordValdate:true,
        })
      }
      else
      {
        this.setState({
          passwordValdate:false,
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bgImage} source={require('./background.jpg')} />
        <View style={styles.inputContainer}>
          <TextInput style={[styles.inputs, 
          !this.state.emailValdate? styles.error:null]}
              placeholder="abc@example.com"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.validate(email,'email-address')}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput style={[styles.inputs,
          !this.state.passwordValdate? styles.error:null]}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.validate(password, 'password')}
              />
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        </View>

        <TouchableOpacity style={styles.btnForgotPassword} onPress={() => this.onClickListener('restore_password')}>
            <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => Actions.home({})}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.signup({})}>
            <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const resizeMode = 'center';
const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
      src: '/path/to/video.mp4',
      type: 'video/mp4'
    }]
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    marginRight:15,
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
  btnForgotPassword: {
    height:15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom:10,
    width:300,
    backgroundColor:'transparent'
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage:{
    flex: 1,
    /*resizeMode:'contain',*/
    position: 'absolute',
    width: '100%',
    height: '100%',
    
  },
  btnText:{
    color:"white",
    fontWeight:'bold'
  },
  error:{
    borderBottomWidth:2,
    borderColor:'red',
    borderTopWidth:2,
  }
}); 