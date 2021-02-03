import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'

FontAwesome.loadFont()

const RowItem =({title, tag, iconname})=> {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <FontAwesome name={iconname} size={25} color={"black"}/>
                <View style={{flex:0.8}}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{tag}</Text>
                </View>
                <FontAwesome name="angle-right" size={25} color={"black"}/>
            </View>
        </TouchableOpacity>
        )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:10,
        padding:10,
        width:'95%',
        backgroundColor:'#cecece',
        borderRadius:10,
        marginTop:5,
        marginBottom:5
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    }
})

export default RowItem