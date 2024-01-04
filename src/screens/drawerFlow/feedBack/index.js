import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';
import StarRating from 'react-native-star-rating-widget';

const RatingArr = [
  {
    id: 1,
    image: require('../../../assets/icons/goldStar.png'),
  },
  {
    id: 2,
    image: require('../../../assets/icons/goldStar.png'),
  },
  {
    id: 3,
    image: require('../../../assets/icons/goldStar.png'),
  },
  {
    id: 4,
    image: require('../../../assets/icons/goldStar.png'),
  },
  {
    id: 5,
    image: require('../../../assets/icons/silverStar.png'),
  },
];

const FeedBack = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(0);

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    console.log(inputValue);
    setInputValue('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
          </TouchableOpacity>
          <Text style={styles.headingText}>FEEDBACK</Text>
        </View>
        <Text style={styles.submitText}>Submit feedback for Numera app</Text>
        <Text style={styles.ratingText}>Rate in Stars</Text>
        <View style={styles.starContainer}>
          {/* {RatingArr.map(item => (
            <StarIcon key={item.id} item={item} />
          ))} */}
          <StarRating rating={rating} onChange={setRating} />
        </View>
        <Text style={styles.reviewText}>Review</Text>
        <View style={styles.inputField}>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            placeholder="Type here..."
            value={inputValue}
            onChangeText={handleInputChange}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit}
          // disabled={!isValid}
          onPressIn={() => navigation.navigate('Dashboard')}>
          <Text style={styles.btnText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const StarIcon = ({item}) => (
  <TouchableOpacity>
    <Image source={item.image} />
  </TouchableOpacity>
);

export default FeedBack;
