import { Text, View,Image,Dimensions } from 'react-native';
import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import Icon from '../constants/icons';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export class Loader extends Component {
    static propTypes = {
        prop: PropTypes
    }
    componentDidMount() {
        console.log(this.props.isLoading,"value from redux..... loader")
    }
  render() {
    return (
        <>
        {this.props.isLoading &&(
      <View style={{flex:1,minHeight:height}}>
        <LottieView style={{alignSelf:"center"}} 
             source={Icon.loader} 
             autoPlay loop />
             <Text style={{alignSelf:"center"}}>Loding...</Text>
      </View>
        )}
        </>
    );
  }
}
const mapStateToProps = (state) => ({
    value:state.global.value,
    isLoading:state.global.isLoading
})

export default connect(mapStateToProps,{})(Loader)
