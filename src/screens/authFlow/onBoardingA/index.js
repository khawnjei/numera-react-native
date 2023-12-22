import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../services/utilities/colors';
// import Swiper from 'react-native-swiper';
// import {appImages} from '../../../services/utilities/assets';

const Data = [
  {
    id: 1,
    title: 'Your Personalized Learning Path',
    bodyText:
      'We adapt to your unique style, creating a path thats just right for you.',
    image: require('../../../assets/images/bro.png'),
  },
  {
    id: 2,
    title: 'Continuous Improvement',
    bodyText:
      'We keep refining your learning experience based on your performance.',
    image: require('../../../assets/images/progress-bro.png'),
  },
  {
    id: 3,
    title: 'Learning at Your Pace',
    bodyText:
      'You set the tempo. Whether you are a quick learner or need more time.',
    image: require('../../../assets/images/time-flies.png'),
  },
];

const Item = ({title, body, image}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={({flexDirection: 'column'}, {width})}>
      <View style={styles.imageContent}>
        <Image
          style={[styles.imageMain, {width, resizeMode: 'contain'}]}
          source={image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={[styles.bodyText]}>{body}</Text>
      </View>
    </View>
  );
};

const BoardingA = ({navigation}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <FlatList
        data={Data}
        pagingEnabled
        bounces={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Item
            {...item}
            title={item.title}
            body={item.bodyText}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
      />
      {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {Data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === selected && {
                backgroundColor: 'red',
              },
            ]}
          />
        ))}
      </View> */}
      {/* <Swiper
        style={{flex: 1}}
        showsPagination={true}
        showsButtons={false}
        loop={false}>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.imageContent}>
            <Image style={[styles.imageMain]} source={appImages.boardingB} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>pablo</Text>
            <Text style={[styles.bodyText]}>isaaaaaa</Text>
          </View>
        </View>
      </Swiper> */}
      {/* <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('Signin')}>
        <Text style={styles.btnText}>GET STARTED</Text>
      </TouchableOpacity>
      <View style={styles.bottomText}>
        <Text style={styles.bottomBody}>Copyrighted © Numera</Text>
      </View>
    </View>
  );
};

export default BoardingA;
