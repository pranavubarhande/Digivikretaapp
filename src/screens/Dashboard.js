import React, {useState, useEffect} from "react"
import {ScrollView, Alert, StyleSheet, Image, Text, View, ImageBackground, Button, TextInput, TouchableHighlight, BackHandler } from "react-native";
import { Icon } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';

const Card = ({ myboolean }) => (
  <View>
      {myboolean ? <HomeScreen /> : <OrderScreen />}
  </View>
)

export default function Dashboard(props) {
  const [isHome, setIsHome] = useState(true);
  
    
    
    
  
 
    
    
    
    
    return (
      <View style={styles.mainframe}>
        <Card myboolean={isHome} />
        <TouchableHighlight underlayColor="white" style={styles.addbtn} >
                  <View style={styles.addbtnview}>
                    <Ionicons name="add-circle-outline" size={30} color="white" />

                    <Text style={styles.addbtntext}>Add Product</Text>
                  </View>
                  
      
        </TouchableHighlight>
        <View style={styles.downframe}>
            <TouchableHighlight onPress={() => {setIsHome(true)}} underlayColor="white" style={styles.continuebtn1} >
                <View style={styles.btnview}>
                  <AntDesign name="home" size={30} color="black" />

                  <Text style={styles.btntext}>Home</Text>
                </View>
                
    
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {setIsHome(false)}} underlayColor="white" style={styles.continuebtn2} >
                <View style={styles.btnview}>
                    <AntDesign name="shoppingcart" size={30} color="black" />

                    <Text style={styles.btntext}>Orders</Text>
                </View>
                
    
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {setIsHome(false)}} underlayColor="white" style={styles.continuebtn3} >
                <View style={styles.btnview}>
                    <AntDesign name="setting" size={30} color="black" />

                    <Text style={styles.btntext}>Setting</Text>
                </View>
                
    
            </TouchableHighlight>
        </View>
          
          
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    mainframe: {
      marginTop: 50,
      width: "100%",
      height: "100%",
    },
    
    
    downframe: {
        width: "100%",
        height: "7%",
        position: "absolute",
        bottom: 50,
        
        display: "flex",
        flexDirection: "row",
        backgroundColor:"white",
        justifyContent: "space-around",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10

      
      
    },
          
      
    continuebtn1: {
      width: "10%",
    },
    continuebtn2: {
      width: "10%",
    },
    continuebtn3: {
      width: "12%",
    },
  btnview: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btntext: {
      color: "black",
      fontSize: 15,
      fontFamily: "sans-serif",
      fontWeight: "400",
      
  },
  addbtn: {
    position: 'absolute',
    bottom: '15%',
    right: 10,
    backgroundColor : "black",
    padding: 10,
    borderRadius: 10

  },
  addbtntext: {
    color: "white",
  },
    addbtnview: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
    
    
    
    
  })