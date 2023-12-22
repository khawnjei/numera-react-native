import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  arrowIcon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: fontFamily.appTextBoldTwo,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  otpContainer: {
    height: 82,
    marginBottom: 29,
    marginHorizontal: 40,
    marginTop: 10,
  },
  otp: {
    width: 58,
    height: 58,
    fontFamily: fontFamily.appTextMedium,
    fontSize: 20,
    lineHeight: 3,
    paddingBottom: 0,
    borderRadius: 10,
    borderColor: colors.grey,
    color: colors.grey,
    backgroundColor: colors.greyLight,
  },
  otpTitleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  otpTextTop: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: fontFamily.appTextLight,
  },
  otpBottomContainer: {
    alignItems: 'center',
  },
  otpBottomText: {
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'underline',
    textDecorationColor: '#3066BE',
    fontFamily: fontFamily.appTextLight,
  },
  btn: {
    marginTop: 196,
    marginHorizontal: 17,
    backgroundColor: colors.theme,
    height: 50,
    alignItems: 'center',
    width: 320,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: colors.white,
  },
});
