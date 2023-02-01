import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const EndKeyboard= ()=>{Keyboard.dismiss}

class SignIn extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{marginTop: 40}}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <Image source={require('../Image/logotweet.png')} style={{
            height:25,
            width: 25,
            marginTop: 40,
            marginHorizontal: '35%'
        }} />
        </View>
        
        <View style={{paddingVertical: 80}}>

          <Text style={{fontSize: 27, fontWeight: 'bold', marginLeft: 10}}>To get started, first enter</Text>
          <Text style={{fontSize: 27, fontWeight: 'bold', marginLeft: 10}}>your phone, email, or</Text>
          <Text style={{fontSize: 27, fontWeight: 'bold', marginLeft: 10}}>@username</Text>
        </View>

        <TouchableOpacity style={{marginTop: 30, borderBottomWidth: 1, marginHorizontal: 20}}>
          <TextInput placeholder='Phone, email, or username' placeholderTextColor={'black'} style={{padding: 10,}} />
        </TouchableOpacity>

        <View style={{marginVertical: '110%', flexDirection: 'row', justifyContent:'space-between', marginHorizontal: '5%'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ForgotPass')}>
            <Text style={{fontSize: 15}}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 1, padding: 5, borderRadius: 10, paddingHorizontal: 10}}>
            <Text style={{fontWeight: 'bold'}}>Next</Text>
          </TouchableOpacity>
        </View>

      </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default SignIn
