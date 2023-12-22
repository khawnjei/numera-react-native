import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  mainIcon: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
  },
  icon2: {
    width: 88,
    height: 66,
  },
  iconText: {
    color: colors.theme,
    fontSize: 24,
    fontWeight: '700',
  },
  wrapper: {
    marginTop: 45,
  },
  forgotText: {
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 20,
    marginTop: 8,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  textSignin: {
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: 19,
    marginBottom: 13,
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  textBottom: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: fontFamily.appTextBoldTwo,
  },
  bottomIcons: {
    flex: 1,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 99,
  },
  facebook: {
    width: 35,
    height: 35,
    marginLeft: 0,
  },
  google: {
    width: 31,
    height: 31,
    marginLeft: 15,
  },
  textFooter: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: fontFamily.appTextLight,
  },
  btn: {
    marginTop: 5,
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
    fontFamily: fontFamily.appTextBoldTwo,
  },
  error: {
    marginHorizontal: 20,
  },
});
