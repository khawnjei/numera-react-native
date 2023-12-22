import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../../../screens/authFlow/splash';
import BoardingA from '../../../screens/authFlow/onBoardingA';
import SignIn from '../../../screens/authFlow/signin';
import SignUp from '../../../screens/authFlow/signup';
import ForgotPassword from '../../../screens/authFlow/forgotpassword';
import Otp from '../../../screens/authFlow/otp';
import CreatePassword from '../../../screens/authFlow/createpassword';
import AccountSetup from '../../../screens/authFlow/accountsetup';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="OnBoardingA" component={BoardingA} />
      <AuthStack.Screen name="Signin" component={SignIn} />
      <AuthStack.Screen name="Signup" component={SignUp} />
      <AuthStack.Screen name="AccountSetup" component={AccountSetup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Otp" component={Otp} />
      <AuthStack.Screen name="Createpassword" component={CreatePassword} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
