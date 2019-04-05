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
import {Header,Button,Avatar} from 'react-native-elements';
import ImagePicker from "react-native-image-picker";


export default class EditProfile extends Component {
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


  render() {
    return(
      <View style={styles.container}>
        <View style = {styles.profileWrap}>
        
          <Avatar
            style={styles.profilepicwrap}
            size='large'
            rounded
            title="RS"
            onPress={this.pickImageHandler}
            onLongPress={this.resetHandler}
            activeOpacity={0.7}
            
            showEditButton
                    
          />
          
            
          
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  },
  profilepicwrap:{
    width:100,
    height:100,
    borderRadius: 100,
    borderWidth:11,
    borderColor:'#fff',
    
  },
  profileWrap: {
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  
});
