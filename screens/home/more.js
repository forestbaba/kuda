import React,{useLayoutEffect, useCallback} from 'react'
import { View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import RowItem from '../../components/RowItem';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

AntDesign.loadFont();

const More=({})=> {

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {

            // Get StackNav navigation item
            const stackNavigator = navigation.dangerouslyGetParent();
            if(stackNavigator){

                // Actually set Title
                stackNavigator.setOptions({
                    title: "More"
                });
                stackNavigator.setOptions({
                    headerLeft:()=>null
                    
                 });
                 stackNavigator.setOptions({
                    headerRight:()=>(
                        <View style={styles.headerright}>
                                 <AntDesign size={20} color="black" name="bells" style={styles.bell}/>
                    </View>
                    )
                    
                 });
            }
        }, [navigation])
    );

   
    return (
        <ScrollView>
        <View>
            <View style={styles.con1}>
             <RowItem title="James Paul Olai..." tag="Account Details" iconname="user"/>

            </View>
            <View>
            <RowItem title="Statements and Reports" tag="Download monthly statements" iconname="vcard-o"/>
            <RowItem title="Saved Cards" tag="Manage connected cards" iconname="vcard-o"/>
            <RowItem title="Linked Accounts" tag="Manage external accounts" iconname="user-o"/>
            <RowItem title="Chat With Us" tag="Get support or get feedback" iconname="wechat"/>
            <RowItem title="Security" tag="Protect yourself from intruders" iconname="lock"/>
            <RowItem title="Referrals" tag="Earn money when your friends join kuda" iconname="life-saver"/>
            <RowItem title="Account Limits" tag="How much you can spend and receive" iconname="clock-o"/>
            <RowItem title="Legal" tag="About our contract with you" iconname="sticky-note"/>

           <TouchableOpacity><Text style={styles.out}>Sign Out</Text></TouchableOpacity>
           <Text style={styles.version}>Version 0.9</Text>
            </View>
        </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    con1:{
        paddingTop:20,
        paddingBottom:20
    },
    out:{
        color:"red",
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        padding:20
    },
    version:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        padding:20
    },
    bell:{
        paddingRight:15
    }
})

export default More;