import React,{useState, useLayoutEffect} from 'react'
import { View,Text, TextInput, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo'
import ActionButton from '../../components/ActionButton';
import CustomFormTextField from '../../components/CustomFormTextField';
import OptionItem from '../../components/OptionItem';

AntDesign.loadFont();

const {width, height} = Dimensions.get('window');
 const Screen2 =({navigation}) =>{

     const [secEntry, setSecEntry] = useState(true);
     const [expand, setExpand] = useState(false);


   useLayoutEffect(() => {
    navigation.setOptions({
  
    headerRight:()=><Text style={styles.counter}>3/6</Text>


    });
    

    
  }, [navigation]);

     const handleSecEntry=()=>{
         setSecEntry(!secEntry)
     }
    return (
        <View style={styles.parent}>
            <Text style={styles.prompt}>What's Your BVN?</Text>
            <Text style={styles.instruct}>We need your bank Verification Number (BVN) to confirm who you are</Text>
            <Text style={styles.instruct}>We will send a code to the phone number linked to your BVN. If you do not have access to that phone number, skip this step.</Text>
           
    
            <CustomFormTextField title={"Your BVN"} placeholder="1234567890"/>
            {
                expand ? (
                     <TouchableOpacity onPress={()=> setExpand(!expand)} style={styles.butt}>
                        <View style={styles.rowitem}>
                            <View style={styles.circleback}>
                                <AntDesign size={20} name="lock" color={'white'}/>
                            </View>
                            <Text style={styles.excuse}>Why we need your BVN</Text>
                            <AntDesign size={25} name="chevron-right" color={'purple'}/>

                        </View>
                    </TouchableOpacity>
                ):(
                    <>
                    <TouchableOpacity onPress={()=> setExpand(!expand)}  style={styles.butt}>
                        <View style={styles.rowitem}>
                            <View style={styles.circleback}>
                                <AntDesign size={20} name="lock" color={'white'}/>
                            </View>
                            <Text style={styles.excuse}>Why we need your BVN</Text>
                            <AntDesign size={25} name="chevron-down" color={'purple'}/>

                        </View>
                        <View style={styles.explainblock}>
                            <Text>We'll only have access to: </Text>
                            <OptionItem icon="checkmark-sharp" title="Full name"/>
                            <OptionItem icon="checkmark-sharp" title="Phone number"/>
                            <OptionItem icon="checkmark-sharp" title="Date of birth"/>

                            <View style={{ height: 1,width:'80%',borderWidth:2, backgroundColor: 'gray', 
                            marginTop:20,
                            marginBottom:20}} />

                            <Text style={styles.conclusion}>Your BVN does not give us access to your bank account or transactions.</Text>

                            
                        </View>
                        </TouchableOpacity>
            <Text style={styles.policytitle}>For information on what we do with your data, please read our <Text style={styles.textPolicy}>Privacy Notice</Text></Text>            
           
                    </>
                )
            }

            <TouchableOpacity style={styles.skipbutton}><Text style={styles.skiptext}>Skip this step</Text></TouchableOpacity>
            
           
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
        // justifyContent:'flex-start',
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
            fontSize:14,
            paddingTop:10,
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
    },
    rowitem:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'gray',
        padding:13
    },
    circleback:{
        backgroundColor:"purple",
        borderRadius:25,
        padding:5
    },
    excuse:{
        fontWeight:'bold',
        fontSize:20,
        color:'#fff'
    },
    rowoption:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    explainblock:{
        justifyContent:'center',
        alignItems:'flex-start',
        padding:20,
        paddingLeft:70
    },
    conclusion:{
        paddingRight:35
    },
    butt:{
        width:'99%'
    },
    skipbutton:{
        alignSelf:'center',
        padding:20
    },
    skiptext:{
        fontWeight:'bold',
        color:'green',
        fontSize:16
    }
})
export default Screen2;