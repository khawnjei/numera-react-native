import {View, Text} from 'react-native';
import React from 'react';
import {fontFamily} from '../../services/utilities/fonts';
import {colors} from '../../services/utilities/colors';
import {styles} from './styles';

const DashboardCardMain = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>
          Source: <Text style={{color: colors.black}}>AMC</Text>
        </Text>
        <Text style={{color: '#CA4300', textDecorationLine: 'underline'}}>
          DIFFICULTY:{' '}
          <Text
            style={{color: colors.black, fontFamily: fontFamily.appTextLight}}>
            37.225
          </Text>
        </Text>
      </View>
      <View style={styles.textBodyContainer}>
        <Text style={styles.textBody}>
          Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Text>
      </View>
    </View>
  );
};

export default DashboardCardMain;
