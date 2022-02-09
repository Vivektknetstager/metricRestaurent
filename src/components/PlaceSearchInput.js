import { Text, View,Image,Dimensions,TextInput } from 'react-native';
import React, { Component } from 'react';
import Icon from '../constants/icons'
const height = Dimensions.get('window').height;
export class PlaceSearchInput extends Component {
  render() {
    return (
      <>
      <View style={{flex:1,minHeight:height/12,justifyContent:"center",alignItems:"center"}}>
                <Image source={Icon.search} style={{height:25,width:25}}/>
            </View>
            <View style={{flex:7}}>
            <TextInput 
            
            onChangeText={(text) => this.props.onChangeText(text)}
            onFocus={()=>{this.props.onFocus()}}
            placeholder='Search Hotel' style={{flex:1,width:"95%",alignSelf:"center"}}
            />
            </View>
      </>
    );
  }
}

export default PlaceSearchInput;
