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

export default class About extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image source={require('./rakesh.jpg')} style={{width: '100%', height: '100%'}}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000'
  }
});
