import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ShopCosmeticsCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.mainContainer}>
        <View
          style={[styles.contentContainer, {backgroundColor: item.color}]}
        />
        <Text style={styles.contentText}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{item.btnText}</Text>
        <View>
          {item.image && <Image style={styles.btnIcon} source={item.image} />}
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ShopCosmeticsCard;
