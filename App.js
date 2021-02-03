import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Startscreen from './screens/startscreen';
import Loginscreen from './screens/loginscreen';
import Signupscreen from './screens/pinLoginScreen';
import Screen1 from './screens/signup/screen1';
import Screen2 from './screens/signup/screen2';
import Screen3 from './screens/signup/screen3';
import Screen4 from './screens/signup/screen4';
import Home1 from './screens/home/home1';
import Payment from './screens/home/payment';
import Budget from './screens/home/budget';
import Card from './screens/home/card';
import More from './screens/home/more';
import HomeTab from './screens/home/HomeTab';

const Stack = createStackNavigator();

const App= () => { 
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="hometab" component={HomeTab} />
      <Stack.Screen name="more" component={More} />
      <Stack.Screen name="card" component={Card} />
      <Stack.Screen name="budget" component={Budget} />
      <Stack.Screen name="payment" component={Payment} />
      <Stack.Screen name="home" component={Home1} />
      <Stack.Screen name="screen4" component={Screen4} />
      <Stack.Screen name="screen3" component={Screen3} />
      <Stack.Screen name="screen2" component={Screen2} />
        <Stack.Screen name="Home" component={Startscreen} />
        <Stack.Screen name="pinlogin" component={Signupscreen} />
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="screen1" component={Screen1} />
      </Stack.Navigator>
       </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
