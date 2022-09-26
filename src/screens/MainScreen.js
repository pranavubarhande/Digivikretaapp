import React, {useState, useEffect} from "react"
import {ScrollView, StyleSheet, Image, Text, View, ImageBackground, Button, TextInput, TouchableHighlight, BackHandler } from "react-native"
import { Dropdown } from 'react-native-element-dropdown';
import mainscreenback from '../../assets/mainscreenback.jpg'
import axios from 'axios';
// import {ImagePicker} from "react-native-image-picker"
// import DocumentPicker from 'react-native-document-picker'; 
import * as DocumentPicker from 'expo-document-picker';


export default function MainScreen(props) {
  
  const data = [
    { label: 'Groceries', value: '1' },
    { label: 'Dairy', value: '2' },
    { label: 'Bakery', value: '3' },
    { label: 'Fruits and Vegetables', value: '4' },
    { label: 'Cosmetics', value: '5' },
    { label: 'Pharmacy', value: '6' },
    { label: 'Stationary', value: '7' },
    { label: 'Sweets and dry fruits', value: '8' },
  ];
  const kycoptions = [
    { label: 'Udyog Aadhar Certificate', value: '1' },
    { label: 'GST Certificate', value: '2' },
    { label: 'FSSAI Certificate', value: '3' },
  ];
  

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [value2, setValue2] = useState(null);
  const [isFocuscert, setIsFocusCert] = useState(false);
  
  const [sampledata, setSampledata] = useState([]);

  const [ doc, setDoc ] = useState();
  const [filename, setFileName] = useState('Submit File');
  function fetchData(){
    axios.get('http://e424-49-32-237-230.ngrok.io/users')
    .then(function (response) {console.log(response.data)})
    .catch(function (err) {console.log(err)});
    
    
  }
  useEffect(() => {
    {fetchData()}
    
  }, []);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
        if (response.type == 'success') {          
          let { name, size, uri } = response;
          setFileName(name);
          let nameParts = name.split('.');
          let fileType = nameParts[nameParts.length - 1];
          var fileToUpload = {
            name: name,
            size: size,
            uri: uri,
            type: "application/" + fileType
          };
          console.log(fileToUpload, '...............file')
          setDoc(fileToUpload);
          
        } 
      });
    // console.log(result);
    console.log("Doc: " + doc.uri);
  }
 
  const postDocument = () => {
    const url = "http://3924-49-32-237-230.ngrok.io/upload";
    const fileUri = doc.uri;
    const formData = new FormData();
    formData.append('document', doc);
    const options = {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
    };
    console.log(formData);

    fetch(url, options).catch((error) => console.log(error));
  }
  
  
  return (
    <View style={styles.mainframe}>
        <Image style={styles.backimage} source={mainscreenback} />
      
        
        <Text style={styles.texthead}>Enter Shop Details for KYC</Text>
        <TextInput style={styles.textinput} placeholder="Shop Name" />
        <TextInput style={styles.textinput} placeholder="Owner Name" />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Shop Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
        <TextInput style={styles.textinput} placeholder="Pin Code" />
        <TextInput style={styles.textinput} placeholder="Whatsapp Number" />
        <Dropdown
          style={[styles.dropdown, isFocuscert && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={kycoptions}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocuscert ? 'Select Shop Certificate' : '...'}
          searchPlaceholder="Search..."
          value={value2}
          onFocus={() => setIsFocusCert(true)}
          onBlur={() => setIsFocusCert(false)}
          onChange={item => {
            setValue2(item.value);
            setIsFocusCert(false);
          }}
          
        />
        <TouchableHighlight onPress={() => {pickDocument()}}>
          <View>
                <Text >{filename}</Text>
          </View>

        </TouchableHighlight>
        <TextInput style={styles.textinput} placeholder="Enter Aadhar Number" />
        <TouchableHighlight onPress={() => {postDocument()}} underlayColor="white" style={styles.continuebtn} >
            <View style={styles.btnview}>
                <Text style={styles.btntext}>Submit and Start Validation</Text>
            </View>

        </TouchableHighlight>



      
    </View>
  )
}

const styles = StyleSheet.create({
  mainframe: {
    marginTop: 50,
    alignItems: "center",
    
    
    
    
    width: "100%",
    height: "100%",
  },
  backimage: {
    width: "100%",
    height: '100%',
    position: "absolute",
  },
  
  texthead: {
    marginTop: 50,
    fontSize: 25,
    fontFamily: "sans-serif-medium",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
    
    
    textTransform: "uppercase",
  },
  textinput: {
    
    fontSize: 16,
    fontFamily: "sans-serif-medium",
    fontWeight: "400",
    color: "rgba(0, 0, 0, 1)",
        
    borderWidth: 1,
    borderColor: '#1c1f1c',
    borderRadius: 5 ,
    backgroundColor : "#f2f6f7",
    height: 50, 
    width: '80%',
    textAlign: 'center',
    marginTop: 20
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "50%",
    backgroundColor: "white", 
    marginTop: 20
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    width: "50%"
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black",
    backgroundColor: "white"
    

  },
  selectedTextStyle: {
    fontSize: 16,
    backgroundColor: "white"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})