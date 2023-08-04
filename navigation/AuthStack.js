import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../screens/Auth/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import UsernameAdd from '../screens/Auth/UsernameAdd';

const Stack = createStackNavigator();

// nav stack for onboarding screens before user logs in
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown:false, animationEnabled: false,}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown:false, animationEnabled: false,}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{headerShown:false, animationEnabled: false,}}
      />
        <Stack.Screen
        name="UsernameAdd"
        component={UsernameAdd}
        options={{headerShown:false, animationEnabled: false,}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;