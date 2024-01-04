import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {appIcons} from '../../../services/utilities/assets';
import {colors} from '../../../services/utilities/colors';
import {styles} from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const isValid = !otp || otp.length < 4;

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.arrowIcon}
          onPress={() => navigation.goBack()}>
          <Image style={styles.arrowIcon} source={appIcons.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>ENTER OTP</Text>
      </View>
      <View style={[styles.otpContainerTopView]}>
        <View style={styles.otpTitleContainer}>
          <Text style={styles.otpTextTop}>
            Enter OTP We’ve Just Sent You by Email.
          </Text>
        </View>
        <OTPInputView
          autoFocusOnLoad
          code={otp}
          onCodeChanged={text => {
            setOtp(text);
          }}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          style={[styles.otpContainer]}
          pinCount={4}
          codeInputFieldStyle={[styles.otp]}
        />
        <View style={styles.otpBottomContainer}>
          <Text style={styles.otpBottomText}>
            Don’t get one time code ?{' '}
            <Text style={{color: colors.theme}}>Resend</Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        disabled={isValid}
        onPress={() => navigation.push('Createpassword')}>
        <Text style={styles.btnText}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;
