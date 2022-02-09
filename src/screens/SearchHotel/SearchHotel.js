import { SafeAreaView, Text, View,Dimensions, ScrollView } from 'react-native';
import React, { Component } from 'react';
import PlaceSearchInput from '../../components/PlaceSearchInput';
import HotelListItem from '../../components/HotelListItem';
import AppFooter from '../../components/AppFooter';
const height = Dimensions.get('window').height;
const Data = require( '../../helpers/restaurants.json')
export class SearchHotel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantArray: Data.restaurants,

        }
    }
    searchHotel(text){
        this.setState({
            restaurantArray:Data.restaurants.filter((item)=>{
                return item.name.toLowerCase().includes(text.toLowerCase())
            })
        })
    }
  render() {
    return (
      <>
     <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
         <View style={{flex:1,minHeight:height/18,width:"100%",alignSelf:"center",justifyContent:"center"}}>
         <View style={{minHeight:height/12,width:"90%",alignSelf:"center",borderRadius:10,flexDirection:"row",borderWidth:0.5,backgroundColor:"#fff",borderColor:"gray"}}>
            <PlaceSearchInput
            onFocus={()=>null}
            onChangeText = {(text)=>this.searchHotel(text)}
             />
        </View>
         </View>
         <View style={{flex:10}}>
             <ScrollView>
         { this.state.restaurantArray.map((item,index)=>{
                return(
                    <HotelListItem {...this.props} data={item}/>
            
                )
  })}
        <View style={{Height:50}}></View>
        </ScrollView>
         </View>
         <View style={{flex:1}}>
            <AppFooter {...this.props}/>
       </View>
     </SafeAreaView>
      </>
    );
  }
}

export default SearchHotel;
