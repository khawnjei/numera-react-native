import {
  StatusBar,
  TouchableOpacity,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import {styles} from './styles';
import {fontFamily} from '../../../services/utilities/fonts';

const AccountSetup = ({navigation}) => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const toggleDropdown = () => {
    setDropdownMenu(prev => !prev);
  };

  const handleAgeChange = text => {
    setAge(text);
  };

  const handleGenderChange = value => {
    setGender(value);
    toggleDropdown();
  };

  const handleSubmit = () => {
    alert(`Submitted: Age - ${age}, Gender - ${gender}`);
  };

  const isSubmitDisabled = !age || !gender;

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={appIcons.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>ACCOUNT SETUP</Text>
      </View>
      <View style={styles.wrapper}>
        <View style={[styles.inputField]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={appIcons.ageIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Enter Your Age'}
              placeholderTextColor="#444"
              keyboardType={'numeric'}
              autoCapitalize="none"
              onChangeText={handleAgeChange}
              value={age}
            />
          </View>
        </View>
        <View style={[styles.inputField]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={appIcons.userIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Gender'}
              placeholderTextColor="#444"
              onChangeText={handleGenderChange}
              value={gender}
              editable={false}
            />
            <TouchableOpacity onPress={toggleDropdown}>
              <Image
                source={appIcons.dropdownIcon}
                style={styles.dropdownIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {dropdownMenu && (
        <View style={styles.dropdownContainer}>
          <View style={styles.dropdownTextContainer}>
            <TouchableOpacity onPress={() => handleGenderChange('Male')}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 17,
                  fontFamily: fontFamily.appTextLight,
                  fontSize: 13,
                }}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderChange('Female')}>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 17,
                  fontFamily: fontFamily.appTextLight,
                  fontSize: 13,
                }}>
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.btn}
        disabled={isSubmitDisabled}
        onPress={handleSubmit}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountSetup;
