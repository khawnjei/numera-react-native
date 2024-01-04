import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';
import ShopHintCard from '../../../components/shpHintCard';
import ShopCardHintPopup from '../../../components/shopCardHintPopup';
import ShopCosmeticsCard from '../../../components/shopCosmeticsCrad';
import Header from '../../../components/header';

const optionsArr = [
  {
    id: 1,
    title: 'Shop Hints',
  },
  {
    id: 2,
    title: 'Shop Cosmetics',
  },
];

const Shop = ({navigation}) => {
  const [select, setSelect] = useState({id: 1});
  const [hintPopup, setHintPopup] = useState(false);

  const CardArr = [
    {
      id: 1,
      title: '1 Hint',
      price: 100,
      route: () => setHintPopup(true),
    },
    {
      id: 2,
      title: '5 Hint',
      price: 450,
      route: () => setHintPopup(true),
    },
    {
      id: 3,
      title: '20 Hint',
      price: 3000,
      route: () => setHintPopup(true),
    },
    {
      id: 4,
      title: '30 Hint',
      price: 5000,
      route: () => setHintPopup(true),
    },
    {
      id: 5,
      title: '40 Hint',
      price: 7000,
      route: () => setHintPopup(true),
    },
    {
      id: 6,
      title: '50 Hint',
      price: 10000,
      route: () => setHintPopup(true),
    },
  ];

  const CosmeticCardArr = [
    {
      id: 1,
      color: '#ECFAFF',
      title: 'Blue',
      btnText: 'DEFAULT',
    },
    {
      id: 2,
      color: '#E5FFE4',
      title: 'Green',
      btnText: 450,
      image: require('../../../assets/icons/piwhite.png'),
    },
    {
      id: 3,
      color: '#FCFFD6',
      title: 'Yellow',
      btnText: 'DEFAULT',
    },
    {
      id: 4,
      color: '#F1E8FF',
      title: 'Purple',
      btnText: 450,
      image: require('../../../assets/icons/piwhite.png'),
    },
    {
      id: 5,
      color: '#FCFFD6',
      title: 'Pink',
      btnText: 'DEFAULT',
    },
    {
      id: 6,
      color: '#F1E8FF',
      title: 'Orange',
      btnText: 450,
      image: require('../../../assets/icons/piwhite.png'),
    },
  ];

  return (
    <View style={styles.outerContainer}>
      {hintPopup && (
        <ShopCardHintPopup closePopup={() => setHintPopup(false)} />
      )}
      <View style={styles.mainContainer}>
        <View>
          <Header title={'SHOP'} navigation={navigation} />
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>Your token and hint</Text>
          <View style={styles.topIconsContainer}>
            <Text>400</Text>
            <View style={styles.piIconContainer}>
              <Image source={appIcons.piIcon} style={styles.piIcon} />
            </View>
            <Image source={appIcons.hintIcon} style={styles.hintIcon} />
            <Text style={{color: '#FFD517'}}>
              : {''}
              <Text style={{color: colors.black}}>2</Text>
            </Text>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          {optionsArr.map(item => (
            <TouchableOpacity onPress={() => setSelect(item)} key={item.id}>
              <Text
                style={{
                  color: item.id === select.id ? colors.theme : colors.black,
                  fontFamily: fontFamily.appTextBold,
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <>
          {select.id === 1 ? (
            <View style={styles.hintCardContainer}>
              {CardArr.map(item => (
                <ShopHintCard key={item.id} item={item} />
              ))}
            </View>
          ) : (
            <View style={styles.cosmeticsCardContainer}>
              {CosmeticCardArr.map(item => (
                <ShopCosmeticsCard key={item.id} item={item} />
              ))}
            </View>
          )}
        </>
      </View>
    </View>
  );
};

export default Shop;
