import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import DashboardCardMain from '../../../components/dashboardCardMain/DashboardCardMain';
import ProblemCard from '../../../components/problemCard/ProblemCard';
import {styles} from './styles';
import Hint from '../../../components/hint';
import {fontFamily} from '../../../services/utilities/fonts';

const Problem = ({navigation}) => {
  const [hint, setHint] = useState(false);

  const Card = [
    {
      id: 1,
      route: () => setHint(true),
      image: require('../../../assets/icons/hint.png'),
    },
    {
      id: 2,
      route: () => navigation.push('WhiteBoard'),
      image: require('../../../assets/icons/edit.png'),
    },
    {
      id: 3,
      image: require('../../../assets/icons/doubleforward.png'),
    },
  ];

  return (
    <View style={styles.outerContainer}>
      {hint && <Hint closeTopup={() => setHint(false)} />}
      <View style={styles.arrowIconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingMain}>PROBLEM</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>
            TOPICS: Algebra, Arithmetic,{'\n'} Addition, Counting
          </Text>
          <View style={styles.topIconsContainer}>
            <Text>+40</Text>
            <View style={{marginLeft: 5, marginRight: 5}}>
              <Image source={appIcons.piIcon} style={styles.piIcon} />
            </View>
            <Image source={appIcons.hintIcon} style={styles.hintIcon} />
            <Text style={{color: '#FFD517'}}>
              : {''}
              <Text style={{color: colors.black}}>2</Text>
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <DashboardCardMain />
        </View>
        <View style={styles.cardContainer}>
          {Card.map(item => (
            <ProblemCard key={item.id} item={item} route={item.route} />
          ))}
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Type your answer</Text>
          <Text style={styles.headingTextNumber}>01:03</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>
            Answer is 34, Lorem ipsum dolor sit amet, con adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.push('Answer')}
            style={styles.btn}>
            <Text style={styles.btnText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Problem;
