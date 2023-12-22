import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/input';
import {fontFamily} from '../../../services/utilities/fonts';

const SignUp = ({navigation}) => {
  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email')
      .required('An email ID is required'),
    username: Yup.string()
      .required('A username is required')
      .min(2, 'Username must has 2 characters'),
    password: Yup.string()
      .required('Password is a required field')
      .min(6, 'Your password has to have at least 6 characters'),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.icon} source={appIcons.arrowIcon} />
        </TouchableOpacity>
        <View style={styles.mainIcon}>
          <Image style={styles.icon2} source={appIcons.mainIcon} />
          <Text style={styles.iconText}>NUMERA</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
          }}
          validationSchema={signupSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(
              values.email,
              values.password,
              values.username,
              values.confirmpassword,
            );
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
              <Text style={styles.textSignup}>SIGN UP</Text>
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
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
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
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {errors.email}
                  </Text>
                </View>
              )}
              <View style={{marginTop: 5}}>
                <Input
                  value={values.password}
                  icon={appIcons.passwordIcon}
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCorrect={true}
                  eyeIcon={true}
                  secure={isPasswordVisible}
                  showPassword={togglePasswordVisibility}
                />
              </View>
              {errors.password && (
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {errors.password}
                  </Text>
                </View>
              )}
              <View style={{marginTop: 5}}>
                <Input
                  value={values.confirmpassword}
                  icon={appIcons.passwordIcon}
                  placeholder={'Confirm Password'}
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={handleBlur('confirmpassword')}
                  autoCorrect={true}
                  eyeIcon={true}
                  secure={isPasswordVisible}
                  showPassword={togglePasswordVisibility}
                />
              </View>
              {errors.confirmpassword && (
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {errors.confirmpassword}
                  </Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.btn}
                onPress={handleSubmit}
                disabled={!isValid}
                onPressIn={() => navigation.push('AccountSetup')}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </TouchableOpacity>
              <View style={styles.signupContainer}>
                <Text style={{fontFamily: fontFamily.appTextLight}}>
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.push('Signin')}>
                  <Text
                    style={{
                      color: '#6bb0f5',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {' '}
                    SIGN IN
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.textBottom}>OR</Text>
                <View style={styles.bottomIcons}>
                  <Image
                    source={appIcons.facebookIcon}
                    style={styles.facebook}
                  />
                  <Image style={styles.google} source={appIcons.googleIcon} />
                </View>
              </View>
              <View style={styles.footerContainer}>
                <Text
                  style={[
                    styles.textBottom,
                    {fontFamily: fontFamily.appTextLight},
                  ]}>
                  Copyrighted © Numera
                </Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};

export default SignUp;
