import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/input';
import {fontFamily} from '../../../services/utilities/fonts';

const SignIn = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid one')
      .required('An email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Your password has to have at least 8 characters'),
  });

  return (
    <View style={styles.outerContainer}>
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
          initialValues={{email: '', password: ''}}
          validationSchema={loginFormSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(values.email, values.password);
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
              <Text style={styles.textSignin}>SIGN IN</Text>
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

              {errors.email && (
                <View style={styles.error}>
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
              <View style={{marginTop: 15}}>
                <Input
                  value={values.password}
                  icon={appIcons.passwordIcon}
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCorrect={false}
                  eyeIcon={true}
                  secure={isPasswordVisible}
                  showPassword={togglePasswordVisibility}
                  // eyeIconColor={eyeIconColor}
                />
              </View>
              {errors.password && (
                <View style={styles.error}>
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
              <TouchableOpacity
                onPress={() => navigation.push('ForgotPassword')}
                style={styles.forgotText}>
                <Text
                  style={{
                    color: '#6bb0f5',
                    fontFamily: fontFamily.appTextLight,
                  }}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                disabled={!isValid}
                onPress={handleSubmit}
                // onPressIn={()=>navigation.push("Dashboard")}
              >
                <Text style={styles.btnText}>LOGIN</Text>
              </TouchableOpacity>
              <View style={styles.signupContainer}>
                <Text style={{fontFamily: fontFamily.appTextLight}}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.push('Signup')}>
                  <Text
                    style={{
                      color: '#6bb0f5',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {' '}
                    SIGN UP
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
                <Text style={styles.textFooter}>Copyrighted © Numera</Text>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default SignIn;
