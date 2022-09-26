import React, {useState, useEffect} from "react"
import {ScrollView, StyleSheet, Image, Text, View, ImageBackground, Button, TextInput, TouchableHighlight, BackHandler } from "react-native"
import Category from "./Category";
import Products from "./Products";

export default function HomeScreen(props) {
  let listOfItems = [
    {
       fields: {

            category: "grocery",
            name: "toothbrush",
            id: 1
            
       },
    },
    {
       fields: {
            category: "grocery",
            name: "nirma",
            id: 2
       },
    },
    {
       fields: {
            category: "cosmetics",
            name: "shampoo",
            id: 3
       },
       
    },
    {
      fields: {
           category: "cosmetics",
           name: "eyeliner",
           id: 4
      },
    },
    {
      fields: {
           category: "cosmetics",
           name: "shampoo",
           id: 5
      },
      
   },
   {
    fields: {
         category: "cosmetics",
         name: "shampoo",
         id: 6
    },
    
   },
   {
    fields: {
         category: "cosmetics",
         name: "shampoo",
         id: 7
    },
    
    },

 ];
  let loc = listOfItems.map(item => item.fields.category)
  // sort and remove duplicates
  loc = loc.sort().filter((v, i) => loc.indexOf(v) === i);
  
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.Frame1}>
      {loc.map(cat => (
        <Category key={cat} catname={cat}>
          <ScrollView horizontal={true}>
            {listOfItems.filter(item => item.fields.category === cat).map(item => (
              <Products key={item.fields.id} productname={item.fields.name} />
            ))}

          </ScrollView>
          
        </Category>
      ))}
      
        
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Frame1: {
    width: "100%",
    height: "100%",
  },
})
