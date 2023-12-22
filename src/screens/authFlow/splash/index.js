import {View, StatusBar, Image, Text} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../../services/utilities/colors';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoardingA');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
        <View style={styles.image}>
          <Image source={appIcons.splashIcon} />
        </View>
        <View style={styles.bottomText}>
          <Text style={styles.text}>Copyrighted © Numera</Text>
        </View>
      </View>
    </>
  );
};

export default SplashScreen;
