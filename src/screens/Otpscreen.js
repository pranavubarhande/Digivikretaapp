import React, {useState, useEffect} from "react"
import {Alert, StyleSheet, Image, Text, View, ImageBackground, Button, TextInput, TouchableHighlight } from "react-native"
import mainicon from '../../assets/mainicon.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otpscreen(props) {
    const [otp, setOtp] = useState(0);
    const {myotp} = props.route.params;
    console.log(myotp);
    function gotootp(){

    }
    function showAlert(){
        console.log(`${typeof(Number(otp))} ${typeof(Number(myotp))}`);
        console.log(Number(otp) , Number(myotp));
        
        if(Number(otp) == Number(myotp)){
            console.log('validated');
            AsyncStorage.setItem('appkey', Math.random().toString)
            .then(props.navigation.navigate('mainscreen'));
            
        }
        else{
            console.log(
                'invalid'
            );
        }
    }
    return (
      <View style={styles.mainframe}>
        
          
          <Text style={styles.otptext}>Enter OTP</Text>
          <TextInput onChangeText={(newtext) => setOtp(newtext)} keyboardType={'phone-pad'} autoFocus={true} style={styles.txtinput}></TextInput>
          <TouchableHighlight onPress={showAlert} underlayColor="white" style={styles.continuebtn} onClick={gotootp}>
            <View style={styles.btnview}>
                <Text style={styles.btntext}>CONFIRM</Text>
            </View>

          </TouchableHighlight>


        
      </View>
    )
  }
const styles = StyleSheet.create({
    mainframe: {
        alignItems: 'center',
        justifyContent: 'center',
       
        
        width: "100%",
        height: "100%",
    },
    otptext: {
        
        fontSize: 16,
        position: "absolute",
        top: 170,
        
        fontFamily: "sans-serif-medium",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 1)",
        
        
        
    },
    
    
    txtinput: {
        fontSize: 16,
        fontFamily: "sans-serif-medium",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 1)",
        
        borderWidth: 1,
        borderColor: '#1c1f1c',
        borderRadius: 5 ,
        backgroundColor : "#f2f6f7",
        height: 50, 
        width: 100,
        textAlign: 'center'
        
    },
    continuebtn: {
        marginTop:40,
        alignItems: "center"
        
    },
    btnview: {
        marginBottom: 30, 
        width: 300,
        alignItems: "center",
        backgroundColor:"black",
        borderRadius: 10
    },
    btntext: {
        color: "#f0ebeb",
        fontSize: 18,
        fontFamily: "sans-serif",
        fontWeight: "400",
        padding: 20
    },
    
  });