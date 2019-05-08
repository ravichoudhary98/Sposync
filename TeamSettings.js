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
export default class TeamSettings extends Component {

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
                    
                    size='medium'
                    rounded
                    title="logo"
                    onPress={this.pickImageHandler}
                    onLongPress={this.resetHandler}
                    activeOpacity={0.7}
                    source={this.state.pickedImage}
                    showEditButton
                    
                    />
                
            </View>
            <View style={{borderLeftWidth:width/22}}>
                
                <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate("editteamprofile")}>
                    <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="pencil" size={22} color={'#fff'} >    EditTeamProfile </Icon>
                </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate("about")}>
              <Icon style={{alignSelf: 'flex-start', borderWidth:11}} name="info" size={22} color={'#fff'} >      About </Icon>
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
  
  

});
