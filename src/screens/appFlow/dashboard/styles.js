import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 32,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topImage: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: '#3066BE',
    borderRadius: 30,
  },
  textContainer: {
    marginLeft: 5,
  },
  text1: {
    fontFamily: fontFamily.appTextLight,
    fontWeight: '400',
    fontSize: 16,
  },
  text2: {
    fontFamily: fontFamily.appTextMedium,
    fontWeight: '400',
  },
  cardHeading: {
    fontFamily: fontFamily.appTextBold,
    fontWeight: '600',
    marginTop: 15,
  },
  bottomCardHeading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: 15,
    fontWeight: '400',
  },
  btn: {
    width: 313,
    backgroundColor: colors.theme,
    height: 45,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btnText: {
    color: 'white',
    fontFamily: fontFamily.appTextBoldTwo,
    fontSize: 15,
  },
  btnIcon: {
    width: 23,
    height: 23,
    marginLeft: 5,
  },
});
