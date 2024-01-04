import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/input';
import {styles} from './styls';

const EditProfile = ({navigation}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const editProfileSchema = Yup.object().shape({
    username: Yup.string()
      .required('A username is required')
      .min(2, 'Username must has 2 characters'),
    email: Yup.string()
      .email('Email must be a valid email')
      .required('An email ID is required'),
  });

  const handleAgeChange = text => {
    setAge(text);
    console.log('input Value:', text);
  };

  const handleGenderChange = value => {
    setGender(value);
    console.log('gender:', value);
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setDropdownMenu(prev => !prev);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={appIcons.arrowIcon} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.headingText}>Edit Profile</Text>
      </View>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{
            username: '',
            email: '',
          }}
          validationSchema={editProfileSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(values.email, values.username);
          }}>
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            errors,
          }) => (
            <>
              <Input
                value={values.username}
                icon={appIcons.userIcon}
                placeholder={'Full Name'}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                autoCorrect={true}
                eyeIcon={false}
                secure={false}
              />
              {errors.username && (
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                      marginHorizontal: 20,
                    }}>
                    {errors.username}
                  </Text>
                </View>
              )}
              <View style={{marginTop: 5}}>
                <Input
                  value={values.email}
                  icon={appIcons.emailIcon}
                  placeholder={'Email ID'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCorrect={true}
                  eyeIcon={false}
                  secure={false}
                />
              </View>
              {errors.email && (
                <View>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                      marginHorizontal: 20,
                    }}>
                    {errors.email}
                  </Text>
                </View>
              )}
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
              {dropdownMenu && (
                <View style={styles.dropdownContainer}>
                  <View style={styles.dropdownTextContainer}>
                    <TouchableOpacity
                      onPress={() => handleGenderChange('Male')}>
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
                    <TouchableOpacity
                      onPress={() => handleGenderChange('Female')}>
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
                onPress={handleSubmit}
                disabled={!isValid}
                onPressIn={() => navigation.goBack()}>
                <Text style={styles.btnText}>SAVE CHANGES</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default EditProfile;
