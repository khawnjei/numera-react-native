import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const Header = ({navigation, title}) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={openDrawer}>
        <Image source={appIcons.drawerIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
