import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
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
            <Text style={styles.pos}>New England Patriots</Text>
            <Text style={styles.pos}>Philadelphia Eagles</Text>
            <Text style={styles.pos}>Los Angeles Rams</Text>
            <Text style={styles.pos}>Chicago Bears</Text>
            <Text style={styles.pos}>Denver Broncos</Text>
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
