import { Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from '../constants/icons'
export class AppFooter extends Component {
  render() {
    return (
      <>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity 
          onPress={()=>{
              this.props.navigation.navigate('HomeScreen')
          }}
          style={[styles.homeButton,styles.shadow]}>
                <Image source={Icon.Home} style={{width:"50%",height:"50%"}}/>
          </TouchableOpacity>
          </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
    homeButton:{width:60,height:60,borderRadius:100,justifyContent:"center",alignItems:"center",backgroundColor:"white"},
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
export default AppFooter;
