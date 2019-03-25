import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ViewPagerAndroid,
    Image
} from 'react-native';
import Profile from './profile';
import { Actions } from 'react-native-router-flux';
var {one}='0';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
    }
    updateTab(n) {
        this.refs['slider'].setPage(n);
        this.setState({ tab: n });
    }
    static navigationOptions = {
        header: null
    }
    static defaultProps={
        feedIcon:'home',
        chatIcon:'comments-o',
        notifyIcon:'bell',
        userIcon:'user'
    }
    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid style={styles.bodyTab}
                    ref='slider'>
                    <View><FirstTab /></View>
                    <View><SecondTab /></View>
                    <View><ThirdTab /></View>
                    <View><Profile /></View>
                </ViewPagerAndroid>
                <View style={styles.renderTab}>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(0)}>
                        <Icon  name={this.props.feedIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(1)}>
                       <Icon name={this.props.chatIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(2)}>
                        <Icon name={this.props.notifyIcon} size={30} color={'#050'} />
                    </Text>

                    <Text style={styles.renderTabItems} onPress={() => this.updateTab(3)}>
                       <Icon name={this.props.userIcon} size={30} color={'#050'} />
                    </Text>
                </View>
            </View>
        );
    }
}
class FirstTab extends Home {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{fontSize:50}}>Hello</Text>
                <Text style={{fontSize:30}}>1</Text>
            </View>
        );
    }
}
class SecondTab extends Home {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{fontSize:50}}> Hello</Text>
                <Text style={{fontSize:30}}>2</Text>
            </View>
        );
    }
}
class ThirdTab extends Home {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{fontSize:50}}>Hello</Text>
                <Text style={{fontSize:30}}>3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3fcd9'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },
    bodyTab: {
        flex: 10,
        width: '100%'
    },
    renderTab: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '100%',
    },
    renderTabItems: {
        flex: 1,
        height: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    main:{
        flex: 1,
        backgroundColor: '#000'
    }
});