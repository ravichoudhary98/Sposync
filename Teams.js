
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
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Segment, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
var { height, width } = Dimensions.get('window');


export default class Teams extends Component {
  
  
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
        <ScrollView>
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <FlatList
          data={[
            {key: 'Rakesh', 'id': 1},
            {key: 'Ravi', 'id': 2},
            {key: 'Gulshan', 'id': 3},
            {key: 'Digvijay', 'id': 4},
            {key: 'Shubham', 'id': 5},
            {key: 'Bharat','id': 6},
            {key: 'Shubham', 'id': 7},
            {key: 'Banwari', 'id': 8},
          ]}
          renderItem={({item}) => <TouchableOpacity><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
          
        />
      </View>
      </ScrollView>
      )
   

  }

  renderSectionTwo() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <FlatList
          data={[
            {key: 'Devin', 'id': 1},
            {key: 'Jackson', 'id': 2},
            {key: 'James', 'id': 3},
            {key: 'Joel', 'id': 4},
            {key: 'John', 'id': 5},
            {key: 'Jillian','id': 6},
            {key: 'Jimmy', 'id': 7},
            {key: 'Julie', 'id': 8},
          ]}
          renderItem={({item}) => <TouchableOpacity><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
          
        />
      </View>
    )
 

  }
  renderSectionThree() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <FlatList
          data={[
            {key: 'Devin', 'id': 1},
            {key: 'Jackson', 'id': 2},
            {key: 'James', 'id': 3},
            {key: 'Joel', 'id': 4},
            {key: 'John', 'id': 5},
            {key: 'Jillian','id': 6},
            {key: 'Jimmy', 'id': 7},
            {key: 'Julie', 'id': 8},
          ]}
          renderItem={({item}) => <TouchableOpacity><Text style={styles.item}>{item.key}</Text></TouchableOpacity>}
          
        />
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
    
  }

  componentDidMount() {
    console.log(width)
  }

  render() {
    return(
      <Container style={styles.container}>
        <View style ={{height:width/4,}}>
          <MenuProvider style={{  alignSelf: 'flex-end', borderRightWidth: width / 28, borderRightColor: '#fff', borderTopWidth: width / 28, borderTopColor: '#fff' }}>
            <Menu >

              <MenuTrigger  >
                <Text   ><Icon name='cog' size={30} color={'#000'} backgroundColor={'wight'} /></Text>
              </MenuTrigger  >

              <MenuOptions>
                <MenuOption >
                  <Text style={styles.menuContent} onPress={() => Actions.editteamprofile({})}>EditTeamProfile</Text>
                </MenuOption>
                <MenuOption >
                  <Text style={styles.menuContent} onPress={() => Actions.about({})}>About</Text>
                </MenuOption>

                <MenuOption >
                  <Text style={styles.menuContent} onPress={() => Actions.login({})}>Logout</Text>
                </MenuOption>
                <MenuOption value={2} disabled={false}>

                </MenuOption>
              </MenuOptions>

            </Menu>
          </MenuProvider>
          </View>

        <Content>

          <View >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: (width) / 50, borderTopColor: '#fff', borderBottomWidth: (width) / 15, borderBottomColor: '#fff' }}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
                style={styles.button}
              >
                
                <Icon name="users"
                  style={[{ fontSize: 32 }, {color:'#000'}, this.state.activeIndex == 0 ? {} : { color: 'grey' }]} >
                </Icon>
                <Text style={[{fontSize: 14},{ color:'#000'}, this.state.activeIndex == 0 ? {} : { color: 'grey' }]}>Team1</Text>
              </Button>

              <Button
                onPress={() => this.segmentClicked(1)}
                transparent 
                active={this.state.activeIndex == 1}
                style={styles.button}
                >
                
                <Icon name="users" style={[{ fontSize: 32 },{color:'#000'}, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}></Icon>
                <Text style={[{fontSize: 14},{color:'#000'}, this.state.activeIndex == 1 ? {} : { color: 'grey' }]}>Team2</Text>
              </Button>

              <Button
                onPress={() => this.segmentClicked(2)}
                transparent 
                active={this.state.activeIndex == 2}
                style={styles.button}
                >

                <Icon name="users" style={[{ fontSize: 32 }, {color:'#000'}, this.state.activeIndex == 2 ? {} : { color: 'grey' }]}></Icon>
                <Text style={[{fontSize: 14},{ color:'#000'}, this.state.activeIndex == 2 ? {} : { color: 'grey' }]}>Team3</Text>
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
  fourthtabview:{
    flex: 1,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    
  },
  username: {
    fontSize:22,
    marginTop:10,
    color:"#000",
    fontWeight:'bold',
    alignSelf:'center'
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name:{
    fontSize:22,
    marginTop:10,
    color:"#000",
    fontWeight:'bold'
  },
  pos:{
    fontSize:18,
    color:'#000',
    fontWeight:'300',
    fontStyle:'italic'
  },
  buttonContainer: {
    borderTopWidth:width/15,
    borderTopColor:'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",

  },
  menuContent: {
    color: "#000",
    
    padding: 2,
    fontSize: width/24
  }
});