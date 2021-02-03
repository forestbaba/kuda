import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'
import RowItem from '../../components/RowItem'

FontAwesome.loadFont()
const Payment =()=> {

    return (
        <View>
            <Text style={styles.pagetag}>Friends on Kuda</Text>

            <View style={styles.contain}>
                <Text style={styles.pass}>Friends on Kuda</Text>
                <Text>Find your contacts on Kuda.</Text>
            </View>

            <RowItem title="Send Money" tag="Free transfer to all banks" iconname={"send"}/>
            <RowItem title="Buy Airtime" tag="Recharge any phone easily." iconname={"phone"}/>
            <RowItem title="Pay A Bill" tag="Take care your essentials" iconname={"sticky-note-o"}/>
            <RowItem title="Payment Link" tag="Send money with a simple link." iconname={"link"}/>
            <RowItem title="Web Payment" tag="Pay opnline without your card." iconname={"edge"}/>

        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:10,
        padding:15,
        width:'95%',
        backgroundColor:'#cecece',
        borderRadius:10,
        marginTop:5,
        marginBottom:5
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },
    contain:{
        backgroundColor:'#cecece',
        padding:20,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        marginBottom:10
    },
    pass:{
        fontWeight:'bold',
        fontSize:17
    },
    pagetag:{
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        fontWeight:'bold'
    }
})

export default Payment