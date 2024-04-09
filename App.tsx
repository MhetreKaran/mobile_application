/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Users from './src/screens/Users';

const Stack = createNativeStackNavigator();
const App =() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <SafeAreaView> */}
          {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
            <Stack.Screen name="Home" component={Home} />
            {/* <Stack.Screen name="Users" component={Users} /> */}
          {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
