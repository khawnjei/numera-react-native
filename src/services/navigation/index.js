import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authFlow';

const MyStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName="AuthNavigation"
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name="AuthNavigation" component={AuthNavigation} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
