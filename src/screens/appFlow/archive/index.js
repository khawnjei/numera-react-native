import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import DashboardCardMain from '../../../components/dashboardCardMain/DashboardCardMain';
import BtnOpen from '../../../components/btn';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';
import Header from '../../../components/header';

const Archive = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={{marginHorizontal: 20}}>
        <Header title={'ARCHIVE'} navigation={navigation} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>Problems history</Text>
        <View style={{marginTop: 10}}>
          <DashboardCardMain />
        </View>
        <BtnOpen navigation={() => navigation.push('Answer')} />
        <View style={{marginTop: 20}}>
          <DashboardCardMain />
        </View>
        <BtnOpen navigation={() => navigation.push('Answer')} />
      </View>
    </View>
  );
};

export default Archive;
