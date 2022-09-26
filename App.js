import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashScreen from './src/screens/FlashScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainScreen from './src/screens/MainScreen';
import Otpscreen from './src/screens/Otpscreen';
import Dashboard from './src/screens/Dashboard';

import {useState, useEffect} from 'react'


export default function App() {
  const Stack = createStackNavigator();
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  
  

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='flashscreen'>
          <Stack.Screen name="flashscreen" component={FlashScreen} />
          <Stack.Screen name="otpscreen" component={Otpscreen} />
          <Stack.Screen name="loginscreen" component={LoginScreen} />
          <Stack.Screen name="mainscreen" component={MainScreen} />
          
          
        </Stack.Navigator>
    </NavigationContainer>
    // <MainScreen />
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
