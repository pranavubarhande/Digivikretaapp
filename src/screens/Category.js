import React, {useState, useEffect} from "react"
import { StyleSheet, Image, Text, View, ImageBackground, TouchableHighlight} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Category(props) {
  
  
  return (
    <View style={styles.mainframecat}>
      
        <View style={styles.subframecat}>
          <Text style={styles.txt1}>{props.catname}</Text>
          

        </View>
        
        {props.children}
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainframecat: {
    width: '100%',
    
  },
  subframecat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  txt1: {
    color: "black",
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: '700',

  }
  
  
})
