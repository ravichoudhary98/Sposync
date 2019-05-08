

/*
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  AsyncStorage
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
          <View style={styles.profilepicwrap}>
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
  profilepicwrap:{
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

*/


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