import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

const ShopHintCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={item.route}>
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <Image style={styles.contentImage} source={appIcons.hintIcon} />
          <Text style={styles.contentText}>{item.title}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{item.price}</Text>
        <View>
          <Image style={styles.btnIcon} source={appIcons.whitePiIcon} />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ShopHintCard;
