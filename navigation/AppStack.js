import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import CreatePost from '../screens/CreatePost';
import ViewPost from '../screens/ViewPost';

const Stack = createStackNavigator();
 
// nav stack for once user is in app
const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CreatePost"
            component={CreatePost}
            options={{headerShown: false, animationEnabled: false}}
          />
          <Stack.Screen
            name="ViewPost"
            component={ViewPost}
            options={{headerShown: false, animationEnabled: false}}
          />
        </Stack.Navigator>
      );
}

export default AppStack;