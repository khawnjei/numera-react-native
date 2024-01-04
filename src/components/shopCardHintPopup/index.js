import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ShopCardHintPopup = ({closePopup}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyHeading}>CONFIRM SHOP</Text>
        </View>
        <Text style={styles.bodyText}>
          Lorem ipsum dolor sit amet, con adipiselit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={closePopup} style={styles.cancelBtn}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shopBtn}>
            <Text style={styles.shopBtnText}>Shop</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ShopCardHintPopup;
