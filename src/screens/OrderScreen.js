import React, {useState, useEffect} from "react"
import { StyleSheet, Image, Text, View, ImageBackground} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function OrderScreen(props) {
  
  
  return (
    <View style={styles.Frame1}>
      
      
      <Text style={styles.Txt734}>OrderScreen</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  Frame1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,1)",
    width: "100%",
    height: "100%",
  },
  
  Icons8Shop501: {
    width: 50,
    height: 50,
  },
  Txt734: {
    postion: "relative",
    left: 20,
    top: 40,
    fontSize: 16,
    fontFamily: "sans-serif-medium",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    width: 161,
    height: 62,
    textTransform: "uppercase",
  },
})
