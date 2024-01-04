import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import TabNavigator from '../tabFlow';
import {fontFamily} from '../../utilities/fonts';
import {appIcons} from '../../utilities/assets';
import {Image, TouchableOpacity, View} from 'react-native';
import Profile from '../../../screens/drawerFlow/profile';
import Contact from '../../../screens/drawerFlow/contact';
import FeedBack from '../../../screens/drawerFlow/feedBack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            source={appIcons.closeIcon}
            style={{width: 30, height: 30, marginLeft: 10, marginTop: 10}}
          />
        </TouchableOpacity>
        <View style={{marginTop: 30, marginLeft: 120}}>
          <DrawerItem
            label="Profile"
            onPress={() => props.navigation.navigate('Profile')}
            labelStyle={{color: '#333', fontFamily: fontFamily.appTextLight}}
            pressColor="transparent"
          />
          <DrawerItem
            label="Contact Us"
            onPress={() => props.navigation.navigate('Contact')}
            labelStyle={{color: '#333', fontFamily: fontFamily.appTextLight}}
            pressColor="transparent"
          />
          <DrawerItem
            label="Feedback"
            onPress={() => props.navigation.navigate('FeedBack')}
            labelStyle={{color: '#333', fontFamily: fontFamily.appTextLight}}
            pressColor="transparent"
          />
        </View>
      </DrawerContentScrollView>
    </>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '100%',
          backgroundColor: '#fff',
        },

        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: fontFamily.appTextLight,
        },
        headerTintColor: '#fff',
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Drawer.Screen name="FirstPage" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="FeedBack" component={FeedBack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
