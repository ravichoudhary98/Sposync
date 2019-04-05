import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ViewPagerAndroid,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List } from 'native-base';

export default class Team extends Component {
  render() {
    return(
      <View style={styles.container}>
        <List>
            <Text style={styles.pos}>Dallas Cowboys</Text>
            
        </List>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pos:{
    fontSize:22,
    color:'#f3fcd9',
    fontWeight:'300',
    fontStyle:'italic'
    
  }
});
