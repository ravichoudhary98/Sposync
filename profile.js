
/*import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://avatars0.githubusercontent.com/u/10174591?s=460&v=4'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Rakesh Sharma</Text>
              <Text style={styles.info}>Centre Forward  / Football</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Team</Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
*/

/*import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

HEADER_MAX_HEIGHT=120
HEADER_MIN_HEIGHT=70
PROFILE_IMAGE_MAX_HEIGHT=80
PROFILE_IMAGE_MIN_HEIGHT=40

export default class Profile extends Component {

  render() {
    return (
      <View style ={{flex: 1}}>
        
        <View style={{
            position:'absolute',
            top:0,
            left:0,
            right:0,
            backgroundColor:'lightskyblue',
            height:HEADER_MAX_HEIGHT,
          }}> 
        </View>

        <ScrollView>
          <View style={{
            height:PROFILE_IMAGE_MAX_HEIGHT,
            width:PROFILE_IMAGE_MAX_HEIGHT,
            borderRadius:PROFILE_IMAGE_MAX_HEIGHT / 2,
            borderColor:'white',
            borderWidth:3,
            overflow:'hidden',
            marginTop:HEADER_MAX_HEIGHT - (PROFILE_IMAGE_MAX_HEIGHT / 2),
            marginLeft:10

          }}>
            <Image source={require('./rakesh.jpg')}
              style={{flex:1, width: null, height: null}}
           ></Image>
          </View>
          <View>
            <Text style={{fontWeight:'bold',fontSize:26,paddingLeft:10}}>Rakes Sharma</Text>
            <Text style={{fontSize:16, color: "#00BFFF",marginTop:10}} >Centre Forward  / Football</Text>
            </View>
        </ScrollView>
 
      </View>
         

          
          
    
        
    );
  }
}
*/

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

export default class Profile extends Component {

  

  render() {
    return(
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={{alignSelf: 'flex-end'}} onPress={()=> Actions.setting({})}>
            <Icon   name='ellipsis-v' size={30} color={'#fff'} />
          </Text>
          <View style={styles.profilrpicwrap}>
            <Image style={styles.profilrpic} source={require('./rakesh.jpg')}></Image>
          </View>
          <Text style={styles.username}>Rakes Sharma</Text>
          
          <View >
          <Text style={styles.name} > Country - <Text style={styles.pos}>India</Text></Text>
            <Text style={styles.name} > Game - <Text style={styles.pos}>Football</Text></Text>
            <Text style={styles.name} > Achievements - <Text style={styles.pos}>State level Player</Text> </Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.team({})}>
              <Text style={styles.name}> Teams </Text>
            </TouchableOpacity>
            
          </View>
          
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
  containers:{
    backgroundColor: '#000'
  },
  header:{
    flex:1,
    padding:20,
  },
  username: {
    fontSize:22,
    marginTop:10,
    color:"#fff",
    fontWeight:'bold',
    alignSelf:'center'
  },
  background: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    
  },
  name:{
    fontSize:22,
    marginTop:10,
    color:"#fff",
    fontWeight:'bold'
  },
  profilrpicwrap:{
    width:180,
    height:180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth:16,
    alignSelf: 'center',
  },
  profilrpic: {
    flex: 1,
    width:null,
    borderRadius:100,
    alignItems: 'stretch',
    borderColor:'#fff',
    borderWidth:4
  },
  
  pos:{
    fontSize:18,
    color:'#f3fcd9',
    fontWeight:'300',
    fontStyle:'italic'

  }
});
