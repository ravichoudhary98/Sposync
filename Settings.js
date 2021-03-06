import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header,Button,Avatar} from 'react-native-elements';
import ImagePicker from "react-native-image-picker";
var { height, width } = Dimensions.get('window');
export default class Settings extends Component {

  state = {
    pickedImage: null
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: "Pick an Image", maxWidth: 800, maxHeight: 600}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: { uri: res.uri }
        });
        
      }
    });
  }

  resetHandler = () =>{
    this.reset();
  }

  saveEditProfile = () => {
    Alert.alert("Data Auto-Saved")
    this.props.navigation.navigate("profile")
  }

  render() {
    return(
        <View style={styles.container}>
            <View style={{alignSelf:'center', borderBottomWidth:width/15, borderTopWidth:width/20}}>
                <Avatar
                    
                    size='xlarge'
                    rounded
                    title="RS"
                    onPress={this.pickImageHandler}
                    onLongPress={this.resetHandler}
                    activeOpacity={0.7}
                    source={this.state.pickedImage}
                    showEditButton
                    
                    />
                
            </View>
            <View style={{borderLeftWidth:width/22}}>
                
                <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate("editprofile")}>
                    <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="pencil" size={22} color={'#fff'} >    EditProfile </Icon>
                </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate("about")}>
              <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="info" size={22} color={'#fff'} >      About </Icon>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate("login")}>
                <Text style={styles.name}>        Log Out </Text>
            </TouchableOpacity>
            </View> 
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
  profilepicwrap:{
    width:180,
    height:180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth:11,
    alignSelf: 'center'
  },
  

});
