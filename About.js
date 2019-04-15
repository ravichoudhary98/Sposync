import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  Dimensions,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
var { height, width } = Dimensions.get('window');
export default class About extends Component {



  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={{ color: 'red', fontSize: width / 15, alignSelf: 'center' }}>
            ABOUT {'\n'}
          </Text >
          <Text style={{ color: '#000', fontSize: width / 20, }}>
            SpoSync, is the India's 1st go-to app, for all who are seeking opportunity to show their expertise in the sports zone.WAIT NO MORE, being the objective, SpoSync lets you acquaint and vibe with the people with whom you could build your future team. It helps you to set your niche in this competing world of sports by acting as a cross-road, where you meet people from all over the world.{'\n'}
          </Text>
          <Text style={{ color: 'red', alignSelf: 'center', fontSize: width / 18 }}>
            WHAT WE ARE DOING FOR YOU {'\n'}
          </Text >
          <Text style={{ color: '#000', fontSize: width / 20 }}>
            People now, can follow, connect, make their own team, and start off with their zeal to explore in this new era of sports, where no one is less. So, make your sportfolio and bring a change to your life, as no limit shall stop you.
        </Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
