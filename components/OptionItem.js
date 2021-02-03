import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

Ionicons.loadFont();

const  OptionItem =({icon, title}) => {
    return (
            <View style={styles.rowoption}>
                <Ionicons size={25} name={icon} color={'purple'}/> 
                <Text style={styles.text}>{title}</Text>
            </View>
    )
}

const styles= StyleSheet.create({
    rowoption:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text:{
        paddingLeft:20
    }
})

export default OptionItem;