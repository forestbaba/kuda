import React from 'react';
import {Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

 const ActionButton =({title, handleOnPress})=> {
    return (<TouchableOpacity onPress={handleOnPress}>
                <Text style={styles.actionButton}>{title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    actionButton:{
        width:width * 0.8,
        textAlign:'center',
        color:"#FFF",
        backgroundColor:'#3B1C57',
        borderRadius:50,
        paddingTop:15,
        paddingBottom:15,
        fontWeight:'bold',
        marginTop:20
        
    },
})
export default ActionButton;