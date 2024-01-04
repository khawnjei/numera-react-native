import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';

const Card = [
  {
    id: 1,
    image: require('../../../assets/icons/edit.png'),
  },
  {
    id: 2,
    route: () => navigation.push('WhiteBoard'),
    image: require('../../../assets/icons/stick.png'),
  },
  {
    id: 3,
    image: require('../../../assets/icons/eraser.png'),
  },
  {
    id: 4,
    image: require('../../../assets/icons/back.png'),
  },
  {
    id: 5,
    image: require('../../../assets/icons/forward.png'),
  },
  {
    id: 6,
    image: require('../../../assets/icons/delete.png'),
  },
];

const WhiteBoard = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.arrowIconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingMain}>WHITE BOARD</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Image source={appIcons.mainIcon} style={styles.mainImage} />
          <Text style={styles.headingText}>NUMERA</Text>
        </View>
        <View style={styles.mapContainer}>
          {Card.map(item => (
            <CardA key={item.id} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

const CardA = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={item.image} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default WhiteBoard;
