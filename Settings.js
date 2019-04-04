import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header,Button,Avatar} from 'react-native-elements';
export default class Settings extends Component {
  render() {
    return(
        <View style={styles.container}>
            <View style={styles.profilrpicwrap}>
                <Avatar
                    size='xlarge'
                    rounded
                    title="RS"
                    onPress={() => console.log("Works!")}
                    onLongPress={() => Actions.editprofile({})}
                    activeOpacity={0.7}
                    source={require('./rakesh.jpg')}
                    
                    />
                
            </View>
            <View >
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.editprofile({})}>
                    <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="pencil" size={20} color={'#fff'} >    EditProfile </Icon>
                </TouchableOpacity>
            </View> 
            
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.editprofile({})}>
              <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="info" size={22} color={'#fff'} >      About </Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.login({})}>
                <Text style={styles.name}>        Log Out </Text>
            </TouchableOpacity>

        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    
    
    alignItems: 'stretch',
  },
  name:{
    fontSize:20,
    borderWidth:11,
    color:"#fff",
  },
  profilrpicwrap:{
    width:180,
    height:180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth:11,
    alignSelf: 'center'
  },
  profilrpic: {
    flex: 1,
    width:null,
    borderRadius:100,
    alignSelf: 'center',
    borderColor:'#fff',
    borderWidth:4
  },

});
