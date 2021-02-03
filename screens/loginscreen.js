import React,{useState} from 'react'
import { View,Text, TextInput, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo'
import ActionButton from '../components/ActionButton';

AntDesign.loadFont();

const {width, height} = Dimensions.get('window');
 const Loginscreen =({navigation}) =>{

     const [secEntry, setSecEntry] = useState(true);

     const handleSecEntry=()=>{
         setSecEntry(!secEntry)
     }
    return (
        <View style={styles.parent}>
            <Image source={require('../assets/kuda_main_icon.png')} style={styles.image}/>
            <Text style={styles.prompt}>Hey there!</Text>
            <TextInput placeholder="Email Address" style={styles.input}
              />
            <View style={styles.holder}> 
            <TextInput placeholder="Password" style={styles.input} secureTextEntry={secEntry}/>
                <TouchableOpacity onPress={handleSecEntry}>
                   <AntDesign name={ secEntry ? "eye-with-line" : "eye"} size={25} color="black" style={styles.eye}/>
                </TouchableOpacity>
            </View>
            <ActionButton title={"Next"} handleOnPress={()=> navigation.navigate('pinlogin')}/>
            <TouchableOpacity>
             <Text style={styles.changepassword}>Change Password</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        alignItems:"center",
        padding:20
    },
    image:{
        width:50,
        height:50,
        resizeMode:"contain"
    },
    prompt:{
        fontSize:35,
        fontWeight:"bold",
        padding:20
    },input:{
        width:width * 0.9,
        backgroundColor:'#cecece',
        textAlign:'center',
        padding:10,
        fontWeight:'bold',
        color:"black",
        fontSize:24,
        marginTop:15,
        paddingRight:50,
        paddingLeft:40
        
    },
    holder:{
        flexDirection:'row',
        
        },
        eye:{
            position:'absolute',
            right:20,
            top:10,
            marginTop:20,
             marginLeft:-40
        },
        changepassword:{
            fontWeight:'bold',
            color:"#008B7F",
            padding:20,
            fontSize:18
        }
})
export default Loginscreen;