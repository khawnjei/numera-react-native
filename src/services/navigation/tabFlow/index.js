import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Dashboard from '../../../screens/appFlow/dashboard';
import {appIcons} from '../../utilities/assets';
import {colors} from '../../utilities/colors';
import Archive from '../../../screens/appFlow/archive';
import Shop from '../../../screens/appFlow/shop';
import Progress from '../../../screens/appFlow/progress';
import Profile from '../../../screens/drawerFlow/profile';

const tabArray = [
  {route: 'Shop', icon: appIcons.shopIcon, component: Shop},
  {route: 'Progress', icon: appIcons.progressIcon, component: Progress},
  {route: 'Dashboard', icon: appIcons.dashboardIcon, component: Dashboard},
  {route: 'Archive', icon: appIcons.archiveIcon, component: Archive},
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container]}>
      <View style={[styles.btn]}>
        <View style={{alignItems: 'center'}}>
          {/* {focused && <View style={styles.dotStyle} />} */}
          <Image
            source={item.icon}
            style={[
              styles.tabIcon,
              {tintColor: focused ? colors.theme : colors.grey},
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.barStyle,
      }}>
      {tabArray.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: colors.white,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    // paddingTop: Platform.OS == 'ios' ? 10 : 5,
  },
  tabIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  dotStyle: {
    width: 5,
    position: 'absolute',
    height: 5,
    borderRadius: 5,
    top: -18,
    backgroundColor: colors.theme,
  },
});
