import React,{useState, useLayoutEffect} from 'react'
import { View,Text, TextInput, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo'
import ActionButton from '../../components/ActionButton';
import CustomFormTextField from '../../components/CustomFormTextField';

AntDesign.loadFont();

const {width, height} = Dimensions.get('window');
 const Screen1 =({navigation}) =>{

     const [secEntry, setSecEntry] = useState(true);


   useLayoutEffect(() => {
    navigation.setOptions({
  
    headerRight:()=><Text style={styles.counter}>1/6</Text>


    });
    

    
  }, [navigation]);

     const handleSecEntry=()=>{
         setSecEntry(!secEntry)
     }
    return (
        <View style={styles.parent}>
            <Text style={styles.prompt}>Start!</Text>
            <Text style={styles.instruct}>Open a Kuda account with a few details.</Text>
            <Text style={styles.instruct}>Your password must have atleast 8 characters including letters and a number</Text>
           
    
            <CustomFormTextField title={"Email Address"} placeholder="youremail@gmail.com"/>
            <CustomFormTextField title={"Enter Password"} placeholder="**********" secureTextEntry/>
            <CustomFormTextField title={"Confirm Password"} placeholder="**********" secureTextEntry/>
            <CustomFormTextField title={"Referral Code (Optional)"} placeholder="XXXXXXXX"/>
            <Text style={styles.policytitle}>For information on what we do with your data, please read our <Text style={styles.textPolicy}>Privacy Notice</Text></Text>            
           <View style={styles.bottomtab}>
                <ActionButton title="Continue" style={styles} handleOnPress={()=> navigation.navigate('pinlogin')}/>

           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        alignItems:"center",
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:20
    },
    image:{
        width:50,
        height:50,
        resizeMode:"contain"
    },
    prompt:{
        fontSize:25,
        fontWeight:"bold",
        padding:2
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
        },
        instruct:{
            fontSize:16,
            paddingTop:5,
            fontWeight:'bold'
        },
        policy:{
            flexDirection:'row',
            paddingLeft:40,
            paddingRight:120,

        },
        policytitle:{
            fontSize:16,
            fontWeight:'bold',
            padding:35,
            textAlign:'center'
        },
        textPolicy:{
            color:"green"
        },
        bottomtab:{
        position:"absolute",
        bottom:40,
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        marginLeft:20
    },
    counter:{
        fontSize:20,
        padding:20,
        fontWeight:'bold'
    }
})
export default Screen1;