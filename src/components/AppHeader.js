import { Text, View,Image,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from '../constants/icons'
export class AppHeader extends Component {
  render() {
    return (
        <>
        <View style={{flex:2,flexDirection:"row"}}>
        <View style={{justifyContent:"center",flex:0.5,}}>
            <Image source={Icon.location} style={{width:30,height:30,}}/>
        </View>
        <View style={{flex:3,justifyContent:"center"}}>
            <Text style={{fontSize:20,color:"black",left:10}}>Calicut</Text>
        </View>
    </View>
    <View style={{flex:1,justifyContent:"center",alignItems:"flex-end"}}>
        <TouchableOpacity
        onPress = {()=>{
            this.props.increase()
        }}
         style={{height:50,width:50,borderRadius:100,right:15}}>
            <Image resizeMode='contain' source={Icon.avatar} style={{width:"100%",height:"100%"}}/>
        </TouchableOpacity>
    </View>
    </>
    );
  }
}

export default AppHeader;
