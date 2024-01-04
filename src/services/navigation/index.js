import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './authFlow';
import TabNavigator from './tabFlow';
import Problem from '../../screens/appFlow/problem';
import WhiteBoard from '../../screens/appFlow/whiteBoard';
import Answer from '../../screens/appFlow/answer';
import DrawerNavigator from './drawerFlow';
import EditProfile from '../../screens/drawerFlow/editProfile';
import ChangePassword from '../../screens/drawerFlow/changePassword';
import PrivacyPolicy from '../../screens/drawerFlow/privacyPolicy';

const MyStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        initialRouteName="DrawerNavigation"
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name="AuthNavigation" component={AuthNavigation} />
        <MyStack.Screen name="DrawerNavigation" component={DrawerNavigator} />
        <MyStack.Screen name="Problem" component={Problem} />
        <MyStack.Screen name="WhiteBoard" component={WhiteBoard} />
        <MyStack.Screen name="Answer" component={Answer} />
        <MyStack.Screen name="EditProfile" component={EditProfile} />
        <MyStack.Screen name="ChangePassword" component={ChangePassword} />
        <MyStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
