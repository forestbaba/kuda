import React,{useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Ficons from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './home1';
import Payment from './payment';
import Budget from './budget';
import Card from './card';
import More from './more';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();

// headerLeft:()=>(
//     <View>
//         <Text>Hi, Olaitan</Text>
//     </View>
// )

// const activityStackNavigator = createStackNavigator({
//     Activity: {
//       screen: Payment,
//       navigationOption: {
//         headerTitle: 'Some title...'
//       }
//     }
//   })

const  HomeTab =({navigation}) =>{

    // useLayoutEffect(() => {
    //     navigation.setOptions({
      
    //     headerRight:()=><AntDesign size={25} color="balck" name="bells" style={styles.bell}/>
    
    
    //     });
        
    
        
    //   }, [navigation]);
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({

            tabBarOptions:({})=>{
                if (route.name === 'Home') {
                    console.log('XXXXXX')
                  }
            },
    
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
                title="Hwy"
            } else if (route.name === 'Payments') {
              iconName = focused ? 'send' : 'send';
            }
            else if (route.name === 'Budget') {
              iconName = focused ? 'ios-pie-chart-outline' : 'pie-chart';
            
            } else if (route.name === 'Cards') {
              iconName = focused ? 'card' : 'ios-card-outline';
            } else if (route.name === 'More') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
       
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          

        }}
      >
        <Tab.Screen name="Home" component={Home1}/>
        <Tab.Screen name="Payments" component={Payment}/>
        <Tab.Screen name="Budget" component={Budget} />
        <Tab.Screen name="Cards" component={Card} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
  );
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
export default HomeTab;