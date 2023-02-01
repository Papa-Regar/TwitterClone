import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

class Home extends Component {
  render() {
    return (
        <View>
      <View style={{
        paddingVertical: 30,
      }}>
        <Image source={require('../Image/logotweet.png')} style={{
            height: 25,
            width: 25,
            marginHorizontal: '50%',
            marginVertical: '5%'
        }} />
      </View>

      <View style={{
             paddingVertical: 170
             }}>
         <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold'}}>See what's happening</Text>
         <Text style={{textAlign:'center', fontSize: 30, fontWeight: 'bold'}}>in the world right now</Text>
      </View>
    
    <TouchableOpacity style={{
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: '10%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }}>
        <Image source={require('../Image/googlelogo.png')} style={{
            height: 20,
            width: 20,
        }} />

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Continue with Google</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: '10%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    }}>
        <Image source={require('../Image/applelogo.png')} style={{
            height: 25,
            width: 25,
        }} />

        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: -28}}>Continue with Apple</Text>
    </TouchableOpacity>

    <Text style={{fontSize: 14, textAlign: 'center', marginTop: 10}}>Or</Text>

    <TouchableOpacity style={{
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: '10%',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        marginTop: 10
    }}>
        <Text style={{fontSize: 18, fontWeight: 'bold',}}>Create account</Text>
    </TouchableOpacity>
    <View>
        <Text style={{textAlign: 'center', fontSize: 12, marginTop: 20}}>By signing up, you agree to our Terms, Privacy Policy, and Cookie Use</Text>
     </View>

    <View style={{flexDirection: 'row', marginTop: 90, marginLeft: 20}}>
        <Text style={{fontSize: 12}}>Have an account already?  </Text>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>Log in</Text>
        </TouchableOpacity>
    </View>
     </View>
      
    )
  }
}



export default Home
