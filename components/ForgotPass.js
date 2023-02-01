import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'

class ForgotPass extends Component {
  render() {
    return (
        <View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.pop()} style={{marginTop: 40, marginLeft: 10}}>
            <Text>Cancel</Text>
          </TouchableOpacity>

          <Image source={require('../Image/logotweet.png')} style={{
            height:25,
            width: 25,
            marginTop: 40,
            marginHorizontal: '35%'
        }} />
        </View>

        <View style={{marginTop: 40}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 20}}>Find your Twitter account</Text>
            <Text style={{fontSize: 15, marginTop: 20, marginLeft: 20}}>Enter the email, phone number, or username</Text>
            <Text style={{fontSize: 15, marginLeft: 20}}>associated with your account to change your</Text>
            <Text style={{fontSize: 15, marginLeft: 20}}>password</Text>
            <TextInput placeholder='Email, phone number , or username' placeholderTextColor={'black'} style={{
                marginTop: 40,
                padding: 10,
                borderBottomWidth: 1,
                marginHorizontal: 20
            }} />
        </View>

        <View style={{marginVertical: '110%', flexDirection: 'row', justifyContent:'flex-end', marginHorizontal: '5%'}}>
          <TouchableOpacity style={{borderWidth: 1, padding: 5, borderRadius: 10, paddingHorizontal: 10}}>
            <Text style={{fontWeight: 'bold'}}>Next</Text>
          </TouchableOpacity>
        </View>
        </View>
    )
  }
}

export default ForgotPass
