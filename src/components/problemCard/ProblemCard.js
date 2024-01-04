import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ProblemCard = ({item}) => {
  return (
    <TouchableOpacity onPress={item.route} style={styles.cardContainer}>
      <Image source={item.image} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default ProblemCard;
