import React,{useState, useRef,useEffect} from 'react'
import { View,Text, TextInput, Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/Entypo'
import ActionButton from '../components/ActionButton';
import CustomTextInput from '../components/CustomTextInput';
import {Styles} from '../utils/Styles';
import { isAndroid } from '../utils/HelperFunctions';

AntDesign.loadFont();

const {width, height} = Dimensions.get('window');
 const PinLoginScreen =() =>{

    const [otpArray, setOtpArray] = useState(['', '', '', '']);
     const [secEntry, setSecEntry] = useState(true);
     const [submittingOtp, setSubmittingOtp] = useState(true);

     const firstTextInputRef = useRef(null);
     const secondTextInputRef = useRef(null);
     const thirdTextInputRef = useRef(null);
     const fourthTextInputRef = useRef(null);
     const fivthTextInputRef = useRef(null);
     const sixthTextInputRef = useRef(null);



  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  useEffect(() => {
    signInWithPhoneNumber();
  }, [])

  async function signInWithPhoneNumber() {
    try{
       const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
       setConfirm(confirmation);
     }catch(e){
    //   alert(JSON.stringify(e));
    }
   }

     const handleSecEntry=()=>{
         setSecEntry(!secEntry)
     }
     const onOtpChange = index => {
        return value => {
          if (isNaN(Number(value))) {
            return;
          }
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index] = value;
          setOtpArray(otpArrayCopy);
          if (value !== '') {
            if (index === 0) {
              secondTextInputRef.current.focus();
            } else if (index === 1) {
              thirdTextInputRef.current.focus();
            } else if (index === 2) {
              fourthTextInputRef.current.focus();
            } else if (index === 3) {
              fivthTextInputRef.current.focus();
            } else if (index === 4) {
              sixthTextInputRef.current.focus();
              setSubmittingOtp(false);
            }
          }
        };
      };

     const onOtpKeyPress = index => {
        return ({ nativeEvent: { key: value } }) => {
          if (value === 'Backspace' && otpArray[index] === '') {
            if (index === 1) {
              firstTextInputRef.current.focus();
            } else if (index === 2) {
              secondTextInputRef.current.focus();
            } else if (index === 3) {
              thirdTextInputRef.current.focus();
            } else if (index === 4) {
              fourthTextInputRef.current.focus();
            } else if (index === 5) {
              fivthTextInputRef.current.focus();
            }
            if (isAndroid && index > 0) {
              const otpArrayCopy = otpArray.concat();
              otpArrayCopy[index - 1] = '';
              setOtpArray(otpArrayCopy);
            }
          }
        };
      };
    return (
        <View style={styles.parent}>
            <Image source={require('../assets/kuda_main_icon.png')} style={styles.image}/>
            <Text style={styles.prompt}>Welcome Back, Olaitan</Text>
        

<View style={[Styles.row, Styles.mt12]}>
          {[
            firstTextInputRef,
            secondTextInputRef,
            thirdTextInputRef,
            fourthTextInputRef,
            fivthTextInputRef,
            sixthTextInputRef,
          ].map((textInputRef, index) => (
            <CustomTextInput
              containerStyle={[Styles.fill, Styles.mr12]}
              value={otpArray[index]}
              
              onKeyPress={onOtpKeyPress(index)}
              onChangeText={onOtpChange(index)}
              keyboardType={'numeric'}
              maxLength={1}
              style={[styles.otpText, Styles.centerAlignedText]}
              autoFocus={index === 0 ? true : undefined}
              refCallback={refCallback(textInputRef)}
              key={index}
            />
          ))}
        </View>
            <ActionButton title={"Sign in"}/>
            <Text style={styles.warning}>Forgot your PIN or this isn't you?</Text>
            <TouchableOpacity>
             <Text style={styles.changepassword}>Sign out</Text>
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
        padding:20,
        textAlign:'center'
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
        warning:{
            padding:20,
            fontSize:16
        }
})
export default PinLoginScreen;