import { Text, View,SafeAreaView,Image, ScrollView,Dimensions, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from '../../constants/icons'
import AppHeader from '../../components/AppHeader';
import PlaceSearchInput from '../../components/PlaceSearchInput';
const Data = require( '../../helpers/restaurants.json')
const height = Dimensions.get('window').height;
import {connect} from 'react-redux';
import {increase,startLoader,stopLoader} from '../../redux/action';
import HotelListItem from '../../components/HotelListItem';
import AppFooter from '../../components/AppFooter';
export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchResults: [],
            bannerArray: [
                {
                    image: Icon.banner,
                    title: 'Mukkam, Calicut',
                    color:"red"
                },
                {
                    image: Icon.banner,
                    title: 'Mukkam, Calicut',
                    color:"orange"
                },
                {
                    image: Icon.banner,
                    title: 'Mukkam, Calicut',
                    color:"green"
                },
                {
                    image: Icon.banner,
                    title: 'Mukkam, Calicut',
                    color:"green"
                },
                {
                    image:Icon.banner,
                    title: 'Mukkam, Calicut',
                    color:"green"
                },

            ],
        
            restaurantArray: Data.restaurants,
        }
    }
    async componentDidMount(){
        await this.props.startLoader();
        setTimeout(() => {
            this.props.stopLoader();
        }, 3000);
    }
        
  render() {
      console.log(this.state.restaurantArray)
    return (
      <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
       <View style={{flex:1,flexDirection:"row"}}>
        <AppHeader {...this.props}/>
       </View>
       
       <View style={{flex:9}}>
       <ScrollView style={{flex:1}}>
        <View style={[styles.mainContainer]}>
            <Text style={{fontSize:height/30,color:"black"}}>Order Food{this.props.counter}</Text>
            <Text style={{fontSize:height/25,top:10,color:"black",fontWeight:"bold"}}>At Your Doorstep</Text>
        </View>
        <View style={{minHeight:height/12,width:"90%",alignSelf:"center",borderRadius:10,flexDirection:"row",borderWidth:0.5,backgroundColor:"#fff",borderColor:"gray"}}>
            <PlaceSearchInput onFocus ={()=>{
                this.props.navigation.navigate("SearchHotel")
            }}/>
        </View>
        <View style={{width:"90%",height:height/15,alignSelf:"center",justifyContent:"center"}}>
            <Text style={{fontSize:height/34,fontWeight:'bold',color:"black"}}>
                Special Deals
            </Text>
        </View>
        <View style={{flex:1,minHeight:height/4,width:"95%",alignSelf:"center",marginTop:5}}>
            <FlatList
            style={{flex:1,minHeight:height/4,width:"95%",alignSelf:"center"}}
            horizontal={true}
            data={this.state.bannerArray}
            renderItem={({ item }) =>{ 
                console.log("okk")
                return (
                <View style={{height:height/3.5,width:height/3.5,justifyContent:"center",alignItems:"center"}}>
                        <Image resizeMode='contain' source={item.image} style={{height:"90%",width:height/3.5}}/>
                    </View>
            )
        }}
            />
            </View>
            <View style={{minHeight:height/14,width:"93%",alignSelf:"center",justifyContent:"center"}}>
                <Text style={{fontSize:height/34,fontWeight:'bold',color:"black"}}>Restaurants</Text>
            </View>
            { this.state.restaurantArray.map((item,index)=>{
                return(
                    <HotelListItem {...this.props} data={item}/>
            
                )
  })}
        <View style={{Height:50}}>

        </View>
        </ScrollView>
       </View>
       <View style={{flex:1}}>
            <AppFooter {...this.props}/>
       </View>
      </SafeAreaView>
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
        mainContainer:{
            flex:1,
            minHeight:height/7,
            width:"95%",
            alignSelf:"center"
        }
});
const mapStateToProps = state => ({
        counter: state.global.value,
})

  
export default connect(mapStateToProps, {increase,startLoader,stopLoader})(HomeScreen);