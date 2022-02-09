import { Text, View,SafeAreaView,Image, ScrollView,Dimensions, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from '../../constants/icons'
import AppHeader from '../../components/AppHeader';
const Data = require( '../../helpers/restaurants.json')
import { connect } from 'react-redux'
import {startLoader,stopLoader} from '../../redux/action';
import AppFooter from '../../components/AppFooter';
const height = Dimensions.get('window').height;
export class RestaurentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:this.props.route.params.data,
        }
    }
    async componentDidMount(){
        await this.props.startLoader();
        setTimeout(() => {
            this.props.stopLoader();
        }, 3000);
    }
  render() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
        <View style={{flex:1,flexDirection:"row"}}>
         <AppHeader/>
        </View>
        <View style={{flex:10}}>
        <ScrollView style={{flex:1}}>
            <View style={{minHeight:height/3}}>
                <Image source={{uri:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={{height:height/3,width:"100%",borderBottomLeftRadius:30,borderBottomRightRadius:30}}/>
            </View>
            <View style={{minHeight:height/12,width:"90%",alignSelf:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:height/30,color:"white",fontWeight:"bold",color:"black"}}>{this.state.data.name}</Text>
            </View>
            <View style={{minHeight:height/15,width:"90%",alignSelf:"center"}}>
                    <Text style={{fontSize:height/45,color:"white",color:"black",fontWeight:"bold"}}>{this.state.data.cuisine_type}</Text>
            </View>
            <View style={{width:"90%",alignSelf:"center",top:-10}}>
                    <Text style={{fontSize:height/40,color:"white",color:"black"}}>{this.state.data.address}</Text>
            </View>
            <View style={{width:"90%",height:height/15,alignSelf:"center",justifyContent:"center"}}>
            <Text style={{fontSize:height/34,fontWeight:'bold',color:"black"}}>
                Opening Hours
            </Text>
        </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Monday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Monday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Tuesday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Tuesday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Wednesday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Wednesday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Thursday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Thursday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Friday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Friday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Saturday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Saturday}</Text>
                </View>
            </View>
            <View style={[styles.shadow,{minHeight:height/18,width:"90%",alignSelf:"center",flexDirection:"row",backgroundColor:"white",borderRadius:10,marginBottom:10}]}>
                <View style={{flex:1,justifyContent:"center"}}>
                    <Text style={{fontSize:12,fontWeight:'bold',color:"black",width:"90%",alignSelf:"center",left:5}}>Sunday</Text>
                </View>
                <View style={{flex:3,justifyContent:"center"}}>
                        <Text style={{fontSize:18,color:"black",width:"90%",alignSelf:"center"}}>{this.state.data.operating_hours.Sunday}</Text>
                </View>
            </View>
            <View style={{width:"90%",height:height/15,alignSelf:"center",justifyContent:"center"}}>
            <Text style={{fontSize:height/34,fontWeight:'bold',color:"black"}}>
                Reviews
            </Text>
            
        </View>
        <FlatList
        data={this.state.data.reviews}
        renderItem={({item})=>{
            return(
        <View style={{width:"90%",minHeight:height/10,alignSelf:"center",paddingBottom:20}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>{item.name}</Text>
                    <Text style={{fontSize:15}}>{item.date}</Text>
                    <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:15}}>{item.rating}</Text>
                    <Image style={{height:15,width:15,top:2,left:5}} source={Icon.star_icon}/>
                    </View>
                    <Text style={{fontSize:15}}>{item.comments}</Text>
            </View>
            )}}
    />
            <View style={{height:50}}/>
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
});
const mapStateToProps = (state) => ({
    value:state.global.value,
    isLoading:state.global.isLoading
})
export default connect(mapStateToProps,{startLoader,stopLoader})(RestaurentDetails)
