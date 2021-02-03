import React,{useState, useLayoutEffect} from 'react'
import { View,Text, TextInput, Image, StyleSheet,Dimensions, TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo'
import ActionButton from '../../components/ActionButton';
import CustomFormTextField from '../../components/CustomFormTextField';
import DatePicker from 'react-native-date-picker'
import {
    Datepicker
  } from '@ui-kitten/components';
AntDesign.loadFont();

const {width, height} = Dimensions.get('window');
 const Screen4 =({navigation}) =>{

     const [selected, setSelected] = useState(0);
     const [gender, setGender] = useState([{id: 1, name:"Male"},{id:2, name:"Female"}])
     
     const [date, setDate] = useState(new Date())
     const [selectedDate, setSelectedDate] = useState(new Date())
    //  const [selectedDate, start_date] = useState(new Date())


   useLayoutEffect(() => {
    navigation.setOptions({
  
    headerRight:()=><Text style={styles.counter}>4/6</Text>});
    
    
  }, [navigation]);

  
    return (
        <View style={styles.parent}>
            <Text style={styles.prompt}>A Bit More About You</Text>
            <Text style={styles.instruct}>We'll love to know you better.</Text>

            <View style={styles.genderparentholder}>

                {
                    gender.map((item, index) =>{
                        return(
                             <TouchableWithoutFeedback key={index} onPress={()=> setSelected(index)}>
                                    <View style={styles.genderholder}  key={0}>
                                        <View style={[styles.gender, {backgroundColor: selected===index ? "green" :'gray'}]}/>
                                        <Text style={styles.gendertitle}>{item.name}</Text>
                                    </View>
                                 </TouchableWithoutFeedback>
                        )
                    })
                }
            
           

            

            </View>
           
            {/* <Datepicker
            placeholder='Start Date'
            style={{width:'95%'}} 
            // date={selectedDate}
            onSelect={nextDate =>setSelectedDate(nextDate)}
          /> */}
            <CustomFormTextField title={"Date Of Birth"} placeholder="19/01/1980"/>
           
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
    },
    gender:{
        width:70,
        height:70,
        borderRadius:50,
    },
    genderholder:{
        justifyContent:'center',
        alignItems:'center'
    },
        gendertitle:{
        fontWeight:'bold',
        fontSize:17,
        paddingTop:5
    },
    genderparentholder:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:"center",
        width:'100%',
        padding:10
    }
})
export default Screen4;