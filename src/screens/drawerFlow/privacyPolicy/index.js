import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';

const PrivacyPolicy = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingText}>PRIVACY POLICY</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.bodyText}>
          It's important to carefully read and understand the privacy policy of
          any website or service you use, as it informs you about your data
          rights and how your information is being handled. Privacy policies are
          required by various data protection regulations around the world, such
          as the General Data Protection Regulation (GDPR) in Europe and the
          California Consumer Privacy Act (CCPA) in the United States. Keep in
          mind that privacy policies can be quite complex and legal in nature,
          so if you have specific questions about a particular privacy policy,
          it's a good idea to consult legal experts or professionals who
          specialize in privacy law. It's important to carefully read and
          understand the privacy policy of any website or service you use, as it
          informs you about your data rights and how your information is being
          handled. Privacy policies are required by various data protection
          regulations around the world, such as the General Data Protection
          Regulation (GDPR) in Europe and the California Consumer Privacy Act
          (CCPA) in the United States. Keep in mind that privacy policies can be
          quite complex and legal in nature, so if you have specific questions
          about a particular privacy policy, it's a good idea to consult legal
          experts or professionals who specialize in privacy law.
        </Text>
      </View>
    </View>
  );
};

export default PrivacyPolicy;
