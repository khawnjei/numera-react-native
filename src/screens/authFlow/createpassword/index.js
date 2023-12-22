import {StatusBar, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {styles} from './styles';
import Input from '../../../components/input';
import {useState} from 'react';
import {fontFamily} from '../../../services/utilities/fonts';

const CreatePassword = ({navigation}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };
  const CreatePssswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Your password has to have at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={appIcons.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>CREATE PASSWORD</Text>
      </View>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={CreatePssswordSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(values.password, values.confirmPassword);
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
              <Text style={styles.inputText}>Create New Password Here.</Text>

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
              />
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
              <View style={{marginTop: 15}}>
                <Input
                  value={values.confirmPassword}
                  icon={appIcons.passwordIcon}
                  placeholder={'Confirm Password'}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  autoCorrect={false}
                  eyeIcon={true}
                  secure={isPasswordVisible}
                  showPassword={togglePasswordVisibility}
                />
              </View>
              {errors.confirmPassword && (
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'red',
                      fontFamily: fontFamily.appTextLight,
                    }}>
                    {errors.confirmPassword}
                  </Text>
                </View>
              )}
              <TouchableOpacity
                style={styles.btn}
                disabled={!isValid}
                onPress={handleSubmit}>
                <Text style={styles.btnText}>CONTINUE</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default CreatePassword;
