import {StatusBar, TouchableOpacity, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../services/utilities/colors';
import {appIcons} from '../../../services/utilities/assets';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {styles} from './styles';
import Input from '../../../components/input';
import {fontFamily} from '../../../services/utilities/fonts';

const ForgotPassword = ({navigation}) => {
  const ForgotFormSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email')
      .required('An email is required'),
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
        <Text style={styles.title}>FORGET PASSWORD</Text>
      </View>
      <View style={styles.wrapper}>
        <Formik
          initialValues={{email: ''}}
          validationSchema={ForgotFormSchema}
          validateOnMount={true}
          onSubmit={values => {
            console.log(values.email);
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
              <View style={[]}>
                <Text style={styles.inputText}>
                  Enter your Email to Reset Password.
                </Text>

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
              <TouchableOpacity
                style={styles.btn}
                disabled={!isValid}
                onPress={() => navigation.push('Otp')}
                onPressIn={handleSubmit}>
                <Text style={styles.btnText}>CONTINUE</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ForgotPassword;
