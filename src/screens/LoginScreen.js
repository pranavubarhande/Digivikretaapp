import React, {useState, useEffect} from "react"
import {Alert, StyleSheet, Image, Text, View, ImageBackground, Button, TextInput, TouchableHighlight, BackHandler } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import mainicon from '../../assets/mainicon.png';
import axios from 'axios';

export default function LoginScreen(props) {
    const [email, setEmail] = useState('');
    
    
    
    

    function gotootp(){

    }
    function nextstep(x){
        props.navigation.navigate('otpscreen', {myotp:x})
        

    }
    function showAlert(){
        console.log('sending email', {myemail: {email}});
        axios.post('http://e424-49-32-237-230.ngrok.io/emailsend', {myemail: {email}})
        .then(response => {nextstep(response.data.recotp)})
        .catch(error => {console.log(error);})
        

    }
    function handleBackButtonClick() {
        navigation.goBack();
        return true;
    }
      
    useEffect(() => {
        
        
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);
    return (
      <View style={styles.mainframe}>
        
          <Image style={styles.mainicon} source={mainicon} />
          <Text style={styles.signuptext}>Login or Signup</Text>
          <TextInput onChangeText={(newtext) => setEmail(newtext)} placeholder="Email" autoComplete={'email'} keyboardType={'email-address'} autoFocus={true} style={styles.txtinput}></TextInput>
          <TouchableHighlight onPress={showAlert} underlayColor="white" style={styles.continuebtn} onClick={gotootp}>
            <View style={styles.btnview}>
                <Text style={styles.btntext}>Continue</Text>
            </View>

          </TouchableHighlight>


          <Text style={styles.terms}>By signing up you agree to our terms and conditions</Text>
        
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
    mainicon: {
        position: "absolute",
        top: 100,
        
        width: 50,
        height: 50,
        
    },
    signuptext: {
        
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
        width: 200,
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
    terms: {
        position: "absolute",
        bottom: 5,
        
        fontSize: 10,
        fontFamily: "sans-serif",
        fontWeight: "400",
        color: "rgba(0, 0, 0, 1)",
        
        
        
    },
  });