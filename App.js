//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthStack from './App/Navigation/AuthStack';


const Stack = createStackNavigator();
// create a component
const App = () => {
  //const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    initAccount()
  }, [])

  const initAccount = () => {
    
  }

  return (
    <View
      style={{
        flex: 1
      }}
    >
          <NavigationContainer
            // ref={r => NavigationService.setTopLevelNavigator(r)}
          >
            <Stack.Navigator
              initialRouteName='AuthStack'
              screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
              }}
            >
              <Stack.Screen name="AuthStack" component={AuthStack} />
            </Stack.Navigator>
          </NavigationContainer>

    </View>
  );
};

export default App;
