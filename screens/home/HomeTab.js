import React,{useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home1 from './home1';
import Payment from './payment';
import Budget from './budget';
import Card from './card';
import More from './more';

const Tab = createBottomTabNavigator();


const  HomeTab =({navigation}) =>{

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
            } 
            else if (route.name === 'Payments') {
              iconName = focused ? 'send' : 'send';
            }
            else if (route.name === 'Budget') {
              iconName = focused ? 'ios-pie-chart-outline' : 'pie-chart';
            
            } 
            else if (route.name === 'Cards') {
              iconName = focused ? 'card' : 'ios-card-outline';
            }
            else if (route.name === 'More') {
              iconName = focused ? 'ios-list' : 'ios-list';
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

export default HomeTab;