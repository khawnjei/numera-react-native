import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {fontFamily} from '../../services/utilities/fonts';
import {styles} from './styles';

const DashboardCard = ({image, text}) => {
  return (
    <View style={{marginTop: 5}}>
      <TouchableOpacity>
        <View style={styles.cardContainer}>
          <Image source={image} style={styles.icon} />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardCard;
