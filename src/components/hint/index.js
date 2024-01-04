import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const Hint = ({closeTopup}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={closeTopup}
      style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          <Image style={styles.bodyIcon} source={appIcons.hintIcon} />
          <Text style={styles.bodyHeading}>HINT</Text>
        </View>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, con adipiselit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Hint;
