import React,{useCallback} from 'react'
import { View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

Entypo.loadFont();

const  Budget =() =>{

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {

            // Get StackNav navigation item
            const stackNavigator = navigation.dangerouslyGetParent();
            if(stackNavigator){

                // Actually set Title
                stackNavigator.setOptions({
                    title: "Budget"
                });
                stackNavigator.setOptions({
                    headerLeft:()=>null
                    
                 });
                 stackNavigator.setOptions({
                    headerRight:()=> null
                 });
            }
        }, [navigation])
    );

    return (
        <View>
            
            <Text style={styles.balance}>₦0.00</Text>
            <View style={styles.piechart}>
                <Entypo name="pie-chart" size={50} color={"purple"}/>
                <View>
                    <Text>No Budget</Text>
                    <Text>₦0.00</Text>
                </View>

                <View style={styles.smallcontainer}>
                    <Text>Create A Budget</Text>
                    <AntDesign size={20} name="plus" color="purple"/>
                </View>
                    
            </View>

            <View >
            
                <Text style={styles.tag}>Transactions</Text>
                <View style={styles.containtwo}>
                <Entypo name="pie-chart" size={60} color={"purple"}/>
                    <Text style={styles.tag2}>Nothing to see here</Text>
                    <Text style={styles.detailtext}>It appears you have performed no transactions in this period. Start 
                        spending some money and we'll let you know how you've spent it
                    </Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    balance:{
        fontSize:30,
        fontWeight:'bold',
        padding:5,
        textAlign:'center',
        padding:20
    },
    piechart:{
        // flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        backgroundColor:'#cecece',
        margin:10,
        padding:20,
        borderRadius:10
    },
    smallcontainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containtwo:{
        // flex:1
        backgroundColor:"#cecece",
        height:'80%',
        padding:20,
        alignItems:'center'
    },
    tag:{
        fontWeight:'bold',
        paddingLeft:10,
        paddingBottom:10
    },
    tag2:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:20
    },
    detailtext:{
        textAlign:'center',
        paddingTop:20,
        paddingBottom:20
    }
})
export default Budget