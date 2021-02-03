import React,{useState} from 'react'
import { View,StyleSheet, Dimensions, Text,TextInput } from 'react-native'

const {width, height} = Dimensions.get('window');

const CustomFormTextField =({title, placeholder,secureTextEntry}) =>{

    const [bgColor, setBgColor] = useState({})

    const onFocus =()=> {
        setBgColor({
            backgroundColor: 'transparent',
            borderBottomWidth:2
        })
      }
    
      const onBlur =()=>{
        setBgColor({
          backgroundColor: '#cecece',
        })
      }
    return (
            <View style={styles.form}>
                <Text>{title}</Text>
                <TextInput placeholder={placeholder}
                  onBlur={ () => onBlur() }
                  onFocus={ () => onFocus() }
                 style={[styles.input,bgColor]} 
                  secureTextEntry={secureTextEntry}/>
            </View>
    )
}

const styles = StyleSheet.create({

    form:{
        marginTop:10,
        marginBottom:10
    },
    input:{
        width:width * 0.9,
        backgroundColor:'#cecece',
        textAlign:'left',
        padding:10,
        fontWeight:'bold',
        color:"black",
        fontSize:24,
        marginTop:5,
        paddingRight:20,
        paddingLeft:10
        
    },
})
export default CustomFormTextField;