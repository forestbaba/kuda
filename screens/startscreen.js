import React from 'react'
import { View, Text, StyleSheet,Image, Touchable, TouchableOpacity,Dimensions } from 'react-native';
import KudaStart from '../assets/kuda_start.png';
import ActionButton from '../components/ActionButton';

const {width, height} = Dimensions.get('window');
const Startscreen =({navigation})=> {
    return (
        <View style={styles.parent}>
            <Image source={require('../assets/kuda_start.png')} 
            width={100} height={100}
            style={styles.image}/>

            <Image source={require('../assets/kuda_1.png')} 
            style={styles.image1}/>

            <Text style={styles.greeting1}>Welcome to your Freedom.</Text>

<ActionButton title={"Start"} handleOnPress={()=> navigation.navigate('screen1')}/>
            


            <View style={styles.actionItem}>
                <Text style={styles.question}>Have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('login')}>
                    <Text style={styles.signinPrompt}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
        resizeMode:'contain',
    },
    image1:{
        width:width,
        height:height * 0.4,
        resizeMode:'contain',
        
    },
    parent:{
        flex:1,
         justifyContent:'center',
        alignItems:'center'
    },
    actionItem:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:40,
        padding:20
    },
    greeting1:{
        fontWeight:"bold",
        fontSize:35,
        paddingLeft:40,
        paddingRight:40,
        textAlign:'center',
        paddingTop:20,
        paddingBottom:20
    },
    actionButton:{
        width:width * 0.7,
        textAlign:'center',
        color:"#FFF", 
        backgroundColor:'#3B1C57',
        borderRadius:50,
        paddingTop:15,
        paddingBottom:15,
        fontWeight:'bold'
        
    },
    signinPrompt:{
        paddingLeft:5,
        paddingRight:5,
        fontSize:16,
        color:"green",
        fontWeight:'bold'
    },
    question:{
        fontWeight:'bold'
    }
})
export default Startscreen