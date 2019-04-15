
import React ,{Component} from 'react'
import {
StyleSheet,
Text,
View,
PixelRatio,
TouchableOpacity,
Platform,
Image,
Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker';
var FileUpload = require('NativeModules').FileUpload;

export default class Upload extends Component {
constructor(props){
super(props);
this.state = {
avatarSource: null,
imgBase64: '',
}
}

selectPhotoTapped() {
const options = {
quality: 1.0,
maxWidth: 500,
maxHeight: 500,
storageOptions: {
skipBackup: true
}
};

ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled photo picker');
  }
  else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  }
  else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  }
  else {
    var source, temp;
    // You can display the image using either:
    //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

    temp = response.data;

    //Or:
    if (Platform.OS === 'android') {
      source = {uri: response.uri, isStatic: true};
    } else {
      source = {uri: response.uri.replace('file://', ''), isStatic: true};
    }

    this.setState({
      avatarSource: source,
      imgBase64: temp,
    });
  }
});
}

upload(){
console.log("click");
var obj = {
uploadUrl: 'http://pttkht.esy.es/uphinhanh.php',
method: 'POST', // default 'POST',support 'POST' and 'PUT'
headers: {
'Accept': 'application/json',
},
fields: {
'img': this.state.imgBase64,
},
files: [

    ]

};
FileUpload.upload(obj, function(err, result) {
  console.log('upload:', err, result);
  if (err == null){
    Alert.alert(
      'Thong Bao',
      'Upload thanh cong',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }else{
    Alert.alert(
      'Thong Bao',
      err,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

})
}

render() {
return (


<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
{ this.state.avatarSource === null ? <Text>Select a Photo</Text> :
    <Image/>

}

      <TouchableOpacity style={{backgroundColor:'yellow', width:60, height:20,marginTop:20,justifyContent: 'center',
      alignItems: 'center'}} onPress={this.upload.bind(this)}>
        <Text>Upload</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'yellow',width:60, height:20, marginTop:20,justifyContent: 'center',
      alignItems: 'center'}} onPress={this.props.cancel}>
        <Text>Cancel</Text>
      </TouchableOpacity>

    </View>
);
}
}

const styles = StyleSheet.create({
container: {
justifyContent: 'center',
alignItems: 'center'
},
avatarContainer: {
borderColor: '#9B9B9B',
borderWidth: 1 / PixelRatio.get(),
justifyContent: 'center',
alignItems: 'center'
},
avatar: {
borderRadius: 75,
width: 150,
height: 150
}

});

/*Edit profile page 

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
            title="Edit"
            onPress={this.pickImageHandler}
            onLongPress={this.resetHandler}
            activeOpacity={0.7}
            
            showEditButton
            source={this.state.pickedImage}       
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
    
    
  },
  profileWrap: {
    flexDirection: 'row',
    alignSelf :'center'
  },
  
});
*/