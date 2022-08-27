//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import SplashScreen from '../Screens/Auth/Splashscr';

const Stack = createStackNavigator();
// create a component
const AuthStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            // initialRouteName='SplashScreen'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
