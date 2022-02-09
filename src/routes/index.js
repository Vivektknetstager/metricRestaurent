import { View, Text } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/homeScreen'; 
import { RestaurentDetails } from '../screens/RestaurentDetails';
import SplashScreen from '../screens/SplashScreen';
import SearchHotel from '../screens/SearchHotel/SearchHotel';
const Stack = createStackNavigator();
const index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RestaurentDetails" component={RestaurentDetails} />
      <Stack.Screen name="SearchHotel" component={SearchHotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
