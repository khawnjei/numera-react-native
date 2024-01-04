import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {appIcons} from '../../../services/utilities/assets';
import {fontFamily} from '../../../services/utilities/fonts';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/input';
import {styles} from './styles';

const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Your password has to have at least 6 characters'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const ChangePassword = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingText}>CHANGE PASSWORD</Text>
      </View>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{
            oldPassword: '',
            password: '',
            confirmpassword: '',
          }}
          validationSchema={changePasswordSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(
              values.oldPassword,
              values.password,
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
              <View style={{marginTop: 5}}>
                <Input
                  value={values.oldPassword}
                  icon={appIcons.passwordIcon}
                  placeholder={'Old Password'}
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  autoCorrect={true}
                  eyeIcon={true}
                  secure={isPasswordVisible}
                  showPassword={togglePasswordVisibility}
                />
              </View>
              {errors.oldPassword && (
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {errors.oldPassword}
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

export default ChangePassword;
