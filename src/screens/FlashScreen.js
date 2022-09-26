import React, {useState, useEffect} from "react"
import { StyleSheet, Image, Text, View, ImageBackground} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FlashScreen(props) {
  useEffect(() => {
    AsyncStorage.getItem('appkey')
        .then((item) => {
            if (item) {
                console.log(item);
                setTimeout(() => props.navigation.navigate('mainscreen'), 3000);
            }
            else{
              setTimeout(() => props.navigation.navigate('loginscreen'), 3000);
            }
        });
    
  
    
  }, [])
  
  return (
    <View style={styles.Frame1}>
      
        <Image
          style={styles.Icons8Shop501}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/c8qpim808cd-1%3A68?alt=media&token=c2f61c3e-3016-4adc-8ac4-724b84ee852b",
          }}
        />
        <Text style={styles.Txt734}>Digital Vikreta</Text>
      
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
