import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../../screens/appFlow/dashboard';

const MyStack = createStackNavigator();

export class DashboardStack extends Component {
  render() {
    return (
      <MyStack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{headerShown: false}}>
        <MyStack.Screen name={'Dashboard'} component={Dashboard} />
      </MyStack.Navigator>
    );
  }
}

export default dashboardStack;
