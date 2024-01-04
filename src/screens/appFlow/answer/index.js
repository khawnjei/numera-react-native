import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';
import DashboardCardMain from '../../../components/dashboardCardMain/DashboardCardMain';

const Answer = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.arrowIconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingMain}>ANSWER</Text>
      </View>
      <View style={{marginTop: 5, marginHorizontal: 20}}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>
            TOPICS: Algebra, Arithmetic,{'\n'} Addition, Counting
          </Text>
          <View style={styles.topIconsContainer}>
            <Text>+0</Text>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <Image source={appIcons.piIcon} style={styles.piIcon} />
            </View>
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <DashboardCardMain />
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.inputText}>Your Input</Text>
          <View style={styles.inputBodyContainer}>
            <Text style={styles.inputBodyText}>
              Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </Text>
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.answerText}>Answer</Text>
          <View style={styles.answerBodyContainer}>
            <Text style={styles.answerBodyText}>Answer is 61</Text>
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <Text style={styles.solutionText}>Solution</Text>
          <View style={styles.solutionBodyContainer}>
            <Text style={styles.solutionBodyText}>
              Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et Lorem ipsum dolor sit amet, con
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Answer;
