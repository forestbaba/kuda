import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import OptionItem from '../../components/OptionItem';
import RowItem from '../../components/RowItem';


const Card =()=> {
    return (
        <View style={styles.parent}>
            <Image source={require('../../assets/card_sing.png')} style={styles.image}/> 
            <Text style={styles.tag}>Get a free physical or virtual debit card.</Text>
            <RowItem title="Request a card" tag="We'll send it to you wherever you are." iconname="vcard-o"/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    tag:{
        fontWeight:'bold',
        padding:20,
        fontSize:16
    },
    parent:{
        flex:1,
        alignItems:'center',
        padding:30
    },
    image:{
        width:"80%",
        height:"30%",
        resizeMode:'contain'
    }
})
export default Card