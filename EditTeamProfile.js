import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  Alert,
  AsyncStorage,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Header,Avatar, Input} from 'react-native-elements';
import ImagePicker from "react-native-image-picker";
import { Item , Button} from 'native-base';


export default class EditTeamProfile extends Component {

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
    
    this.props.navigation.navigate("teams")
  }




  render() {
    return(
      <ScrollView>
      <View style={{height:667, backgroundColor:'#192879'}}>
        <View style = {styles.profileWrap}>
        
          <Avatar
            style={styles.profilepicwrap}
            size='large'
            rounded
            title="logo"
            onPress={this.pickImageHandler}
            onLongPress={this.resetHandler}
            activeOpacity={0.7}

            showEditButton
            source={this.state.pickedImage}       
          /> 
        </View>
        <View style = {styles.mainbody}>
        
          <View style={{marginBottom: 16}}>
            <Text style={styles.labeluser}>
              Team Name
            </Text>
            <Item regular style={styles.inputuser}>
              <Input
              value = {this.state.completename}
              onchangeText= {this.setCompletename}
              autoCaptilize="none" style={{color:'#8392E0'}} />
            </Item>
          </View>

         
          <Button onPress = {this.saveEditProfile} style={styles.btnsave} block>
            <Text style={styles.labelbtnsave}>
              Save Update
            </Text>
          </Button>

          <Button 
          onPress = {() => this.props.navigation.navigate("teams")} 
          style={styles.btncancel} block>
            <Text style={styles.labelbtncancel}>
              Cancel 
            </Text>
          </Button>

        </View>
      </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  
  mainbody: {
    marginTop: 3,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 7,
  },
  labeluser: {
    fontSize: 20,
    color: "#414E93",
    marginBottom: 8,
    marginLeft: 14,
  },
  inputuser: {
    width: 300,
    height: 50,
    borderColor: "#43519D",
    backgroundColor: "transparent",
    borderRadius: 8,
    marginLeft: 14,
  },
  btnsave: {
    width: 300,
    height: 50,
    marginLeft: 14,
    marginTop: 40,
    borderRadius: 8,
    backgroundColor: "#50D9EA",
  },
  labelbtnsave: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",

  },
  btncancel: {
    width: 300,
    height: 50,
    marginLeft: 14,
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: "#283786",
  },
  labelbtncancel: {
    color: "#44539F",
    fontSize: 20,
  },
  profilepicwrap:{
    width:100,
    height:100,
    borderRadius: 100,
    borderWidth:11,
    borderColor:'#192879'
    
  },
  profileWrap: {
    flexDirection: 'row',
    alignSelf :'center'
  },
});


