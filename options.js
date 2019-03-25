import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Options extends Component {
static navigationOptions = ({ navigation: { goBack } }) => ({
title: 'Options',
headerLeft: (
<Icon
name="close"
size={24}
style={{ color: 'black', marginLeft: 10 }}
onPress={() => goBack()}
/>
),
});

render() {
return (
<View style={styles.container}>
          <View >
            <TouchableOpacity style={styles.buttonContainer} onPress={() => Actions.editprofile({})}>
              <Text style={styles.name}> EditProfile </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => ''}>
              <Text style={styles.name}> Log Out </Text>
            </TouchableOpacity>
            
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
    
    name:{
      fontSize:22,
      marginTop:10,
  
      color:"#fff",
      fontWeight:'bold'
    },
    
  });
  