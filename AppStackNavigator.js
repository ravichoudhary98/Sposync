import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import { View, Text, TouchableOpacity } from "react-native";

const LoginScreen = props => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Login navigation={props.navigation} />
  </View>
);

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Profile navigation={props.navigation} />
  </View>
);

const Login = props => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Home");
      }}
    >
      <Text>GO to home from login</Text>
    </TouchableOpacity>
  </View>
);

export default (AppStackNavigator = StackNavigator(
  {
    Login: { screen: LoginScreen },
    profile: { screen: HomeScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
));