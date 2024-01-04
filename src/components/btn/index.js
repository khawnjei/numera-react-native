import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const BtnOpen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={navigation} style={styles.btn}>
        <Text style={styles.btnText}>OPEN</Text>
        <Image source={appIcons.arrowRightIcon} style={styles.btnIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default BtnOpen;
