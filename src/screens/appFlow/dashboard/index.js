import {View, Image, Text, TouchableOpacity} from 'react-native';
import {appIcons} from '../../../services/utilities/assets';
import DashboardCard from '../../../components/dashboardcard/DashboardCard';
import DashboardCardMain from '../../../components/dashboardCardMain/DashboardCardMain';
import {styles} from './styles';
import Header from '../../../components/header';

const Card = [
  {
    id: 1,
    image: require('../../../assets/icons/dashboardcard1.png'),
    text: 'Standard mode',
  },
  {
    id: 2,
    image: require('../../../assets/icons/dashboardcard2.png'),
    text: 'Focus mode',
  },
  {
    id: 3,
    image: require('../../../assets/icons/dashboardcard3.png'),
    text: 'Browse mode',
  },
];

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={{marginHorizontal: 20}}>
        <Header navigation={navigation} title={'HOME'} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <TouchableOpacity>
            <Image source={appIcons.dashboardIcon1} style={styles.topImage} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Good Morning</Text>
            <Text style={styles.text2}>Alex Matheson</Text>
          </View>
        </View>
        <Text style={styles.cardHeading}>Select your Traning mode</Text>
        <View style={{flexDirection: 'row'}}>
          {Card.map(item => (
            <View style={{marginRight: 7}} key={item.id}>
              <DashboardCard image={item.image} text={item.text} />
            </View>
          ))}
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.bottomCardHeading}>Problems</Text>
          <View style={{marginTop: 5}}>
            <DashboardCardMain />
          </View>
        </View>
        <View style={{marginTop: 5}}>
          <TouchableOpacity
            onPress={() => navigation.push('Problem')}
            style={styles.btn}>
            <Text style={styles.btnText}>OPEN</Text>
            <Image source={appIcons.arrowRightIcon} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
