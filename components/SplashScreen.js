import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { Component } from 'react'
import { StackActions } from '@react-navigation/native';

export class SplashScreen extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 200)
    }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#00acee'}}>
        <Image source={require('../Image/tweetwhite.png')} style={{
            resizeMode: 'center',
            width: 200, 
            height: 200
        }} />
      </View>
    )
  }
}

export default SplashScreen
