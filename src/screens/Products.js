import React, {useState, useEffect} from "react"
import { StyleSheet, Image, Text, View, ImageBackground} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import producticon from "../../assets/favicon.png"

export default function Products(props) {

  
  return (
    <View style={styles.Frame1}>
      <Image style={styles.producticon} source={producticon} />
      
        
        <Text style={styles.Txt734}>
            {props.productname}
        </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  Frame1: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
    padding: 10,
    alignItems: 'center',


  },
  Txt734: {
    margin: 10,
    fontSize: 16,
    fontFamily: "sans-serif-medium",
    fontWeight: "400",
    color: "black",
  },
  producticon: {
    width: 100, 
    height: 100,
  }
  
  
  
})
