
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

/**
 * profile.js file content...
 * 
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ViewPagerAndroid,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Segment, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

var { height, width } = Dimensions.get('window');

var images = [
  require('./rakesh.jpg'),
  require('./rakesh.jpg'),
  require('./rakesh.jpg'),

]
export default class Profile extends Component {

  static navigationOptions = {

    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }

  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index
    })
  }
  checkActive = (index) => {
    if (this.state.activeIndex !== index) {
      return (
        { color: 'grey' }
      )
    }
    else {
      return (
        {}
      )
    }

  }

  renderSectionOne() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text style={styles.name} > Country - <Text style={styles.pos}>India</Text></Text>
          <Text style={styles.name} > Game - <Text style={styles.pos}>Football</Text></Text>
          <Text style={styles.name} > Achievements - <Text style={styles.pos}>State level Player</Text> </Text>
          <TouchableOpacity onPress={() => Actions.teams({})}>
            <Text style={styles.name}   > Teams </Text>
          </TouchableOpacity>
        </View>
      </View>
    )


  }

  renderSectionTwo() {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
          <Image style={{
            flex: 1,
            alignSelf: 'stretch',
            width: undefined,
            height: undefined,

          }}
            source={image}>
          </Image>

        </View>
      )
    })

  }
  renderSectionThree() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={[
            { key: 'Devin', 'id': 1 },
            { key: 'Jackson', 'id': 2 },
            { key: 'James', 'id': 3 },
            { key: 'Joel', 'id': 4 },
            { key: 'John', 'id': 5 },
            { key: 'Jillian', 'id': 6 },
            { key: 'Jimmy', 'id': 7 },
            { key: 'Julie', 'id': 8 },
          ]}
          renderItem={({ item }) => <TouchableOpacity><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}

        />
      </View>
    )

  }
  renderSectionFour() {

    return (
      <View style={styles.fourthtabview}>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.editprofile({})}>
          <Icon style={{ alignSelf: 'flex-start', }} name="pencil" size={25} color={'#000'} >    EditProfile </Icon>
        </TouchableOpacity>


        <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.about({})}>
          <Icon style={{ alignSelf: 'flex-start', }} name="info" size={25} color={'#000'} >      About </Icon>
        </TouchableOpacity>

      </View>
    )


  }
  renderSection() {


    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if (this.state.activeIndex == 1) {

      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

          {this.renderSectionTwo()}
        </View>
      )

    }
    else if (this.state.activeIndex == 2) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionThree()}
        </View>
      )
    }
    else if (this.state.activeIndex == 3) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionFour()}
        </View>
      )
    }
  }

  componentDidMount() {
    console.log(width)
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ borderRightWidth: width / 28, borderRightColor: '#fff', borderTopWidth: width / 28, borderTopColor: '#fff' }}>
          <Text style={{ alignSelf: 'flex-end' }} onPress={() => Actions.setting({})}>
            <Icon name='ellipsis-v' size={30} color={'#000'} backgroundColor={'wight'} />
          </Text>
        </View>
        <Content>

          <View style={{ paddingTop: 10 }}>
            <View style={{ backgroundColor: '#fff' }}>


              <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={require('./rakesh.jpg')}
                  style={{ width: (width) / 4, height: (width) / 4, borderRadius: (width) / 8 }} />

              </View>
              <Text style={styles.username}>Rakes Sharma</Text>
            </View>

          </View>





          <View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: (width) / 50, borderTopColor: '#fff', borderBottomWidth: (width) / 15, borderBottomColor: '#fff' }}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
                style={styles.button}
              >

                <Icon name="asterisk"
                  style={[{ fontSize: 32 }, { color: '#000' }, this.state.activeIndex == 0 ? {} : { color: 'grey' }]} >
                </Icon>
                <Text style={[{ fontSize: 14 }, { color: '#000' }, this.state.activeIndex == 0 ? {} : { color: 'grey' }]}>Details</Text>
              </Button>

              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}
                style={styles.button}
              >

                <Icon name="camera" style={[{ fontSize: 32 }, { color: '#000' }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                <Text style={[{ fontSize: 14 }, { color: '#000' }, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}>Photos</Text>
              </Button>

              <Button
                onPress={() => this.segmentClicked(2)}
                transparent
                active={this.state.activeIndex == 2}
                style={styles.button}
              >

                <Icon name="users" style={[{ fontSize: 32 }, { color: '#000' }, this.state.activeIndex == 2 ? {} : { color: 'grey' }]}></Icon>
                <Text style={[{ fontSize: 14 }, { color: '#000' }, this.state.activeIndex == 2 ? {} : { color: 'grey' }]}>Friends</Text>
              </Button>

              <Button
                onPress={() => this.segmentClicked(3)}
                transparent
                last
                active={this.state.activeIndex == 3}
                style={styles.button}
              >

                <Icon name="cogs" style={[{ fontSize: 32 }, { color: '#000' }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}></Icon>
                <Text style={[{ fontSize: 14 }, { color: '#000' }, this.state.activeIndex == 3 ? {} : { color: 'grey' }]}>Settings</Text>
              </Button>

            </View>





            {this.renderSection()}

          </View>
        </Content>
      </Container >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  fourthtabview: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  username: {
    fontSize: 22,
    marginTop: 10,
    color: "#000",
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 22,
    marginTop: 10,
    color: "#000",
    fontWeight: 'bold'
  },
  pos: {
    fontSize: 18,
    color: '#000',
    fontWeight: '300',
    fontStyle: 'italic'
  },
  buttonContainer: {
    borderTopWidth: width / 15,
    borderTopColor: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
 */