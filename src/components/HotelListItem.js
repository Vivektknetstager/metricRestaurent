import { Text, View,TouchableOpacity,StyleSheet,Dimensions,Image } from 'react-native';
import React, { Component } from 'react';
const height = Dimensions.get('window').height;
export class HotelListItem extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('RestaurentDetails',{data:this.props.data})}
        }
         style={[styles.restaurentContainer,styles.shadow,{flexDirection:"row",marginBottom:30}]}>
            <View style={{flex:1,}}>
                    <Image resizeMode='contain' style={{flex:1,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={{uri:this.props.data.photograph}}/>
            </View>
            <View style={{flex:1.5}}>
                <View style={{flex:1,justifyContent:"center",width:"93%",alignSelf:"center",minHeight:height/18}}>
                    <Text numberOfLines={2} style={{fontSize:height/40,fontWeight:'bold',color:"black"}}>
                    {this.props.data.name}
                        </Text>
                </View>
                <View style={{flex:0.5,width:"93%",alignSelf:"center"}}>
                    <Text style={{fontSize:height/55,color:"black"}}>
                    {this.props.dataneighborhood}
                        </Text>
                </View>
                <View style={{flex:0.5,width:"93%",alignSelf:"center"}}>
                    <Text style={{fontSize:height/45,color:"black",fontWeight:"bold"}}>
                    {this.props.datacuisine_type}
                        </Text>
                </View>
                <View style={{flex:2,width:"93%",alignSelf:"center",justifyContent:"center"}}>
                    <View style={{height:height/20,width:"55%",backgroundColor:"green",borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontWeight:"bold",color:"white"}}>Open</Text>
                    </View>
                </View>
                <View style={{flex:6,alignItems:"flex-end"}}>
                        <View style={{width:"55%",flex:1,justifyContent:"center"}}>
                            <Text style={{fontSize:height/45,color:"#ffb5fd",fontWeight:"bold"}}>
                                Order Now 
                                </Text>
                        </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
      },
      restaurentContainer:{
          minHeight:height/4,
          backgroundColor:"white",
          width:"93%",
          alignSelf:"center",
          borderRadius:10,
        },
    })
export default HotelListItem;
