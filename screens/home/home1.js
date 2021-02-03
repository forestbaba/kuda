import React,{useLayoutEffect,useCallback} from 'react'
import { View,Text, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/Fontisto'
import ActionButton from '../../components/ActionButton';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AntDesign2 from 'react-native-vector-icons/AntDesign'


AntDesign.loadFont()

const Home1 =()=> {

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {

            // Get StackNav navigation item
            const stackNavigator = navigation.dangerouslyGetParent();
            if(stackNavigator){

                // Actually set Title
                stackNavigator.setOptions({
                    title: ""
                });

                stackNavigator.setOptions({
                    headerRight:()=>(
                        <View style={styles.headerright}>
                            <Text style={styles.addmoney}>Add Money</Text>
                                 <AntDesign2 size={20} color="black" name="plus" style={styles.bell}/>
                    </View>
                    )
                    
                 });
                stackNavigator.setOptions({
                    headerLeft:()=>(
                        <View style={styles.headerright}>
                             <AntDesign2 size={40} color="black" name="user" style={styles.bell}/>
                            <Text style={styles.addname}>Hi, Olaitan</Text>
                    </View>
                    )
                    
                 });
            }
        }, [navigation])
    );

 


    return (
        <View style={styles.parent}>
            <View style={styles.child1}>
                <Text style={styles.balancetitle}>Acoount Balance</Text>
                <Text style={styles.balance}>₦0.00</Text>

                <View style={styles.rowcontainer}>
                    <View style={styles.subchild}>
                        <AntDesign name="delicious" size={20} color="white" style={styles.icon}/>
                        <Text style={styles.spend}>Spend</Text>
                    </View>
                    <View style={styles.subchild}>
                        <AntDesign name="nav-icon-grid" size={20} color="white" style={styles.icon}/>
                        <Text style={styles.othertags}>Save</Text>
                    </View>
                    <View style={styles.subchild}>
                        <AntDesign name="move-h" size={20} color="white" style={styles.icon}/>
                        <Text style={styles.othertags}>Borrow</Text>
                    </View>
                </View>
            </View>

            <View style={styles.child2}>
                <Text style={styles.title2}>Welcome to Kuda!</Text>
                <Text style={styles.title3}>Your Kuda account number is 11111111111. Your account is limited to a balance of ₦300,000 and you can receive a maximum deposit of ₦50,000 at a time. </Text>
            </View>

            <ActionButton title="Add Money"/>
        </View>
    )
}


const styles = StyleSheet.create({
    parent:{
        flex:1,
        alignItems:'center',
        padding:20
    },
    rowcontainer:{
        width:'80%',
        flexDirection:'row',
        justifyContent:"space-around"
    },
    child1:{
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        backgroundColor:'#3B1C57',
        borderRadius:10
    },
    balancetitle:{
        color:'#f8f8f8',
        fontWeight:'800',
        padding:5
    },
    balance:{
        fontSize:30,
        fontWeight:'bold',
        color:"#FFF",
        padding:5
    },
    spend:{
        color:"white",
        fontWeight:'bold'
    },
    othertags:{
        color:'gray',
        fontWeight:'bold'
    },
    subchild:{
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        // backgroundColor:"#FFF",
        padding:15,
        borderRadius:20
  
    },
    child2:{
        justifyContent:'center',
        alignItems:'center'
    },
    title2:{
        fontWeight:'bold',
        fontSize:18,
        padding:10,

    },
    title3:{
        textAlign:'center',
        padding:20,
        paddingLeft:30,
        paddingRight:30
    },
    headerright:{
        flexDirection:'row',
        justifyContent:'center'
    },
    addmoney:{
        fontWeight:'bold',
        paddingRight:10
    },
    addname:{
        fontWeight:'bold',
        paddingRight:15,
        paddingTop:10,
        fontSize:20
    }
})
export default Home1;