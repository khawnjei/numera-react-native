import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  wrapper: {
    marginHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 20,
  },
  arrowIcon: {
    width: 28,
    height: 28,
  },
  headingText: {
    color: '#333',
    fontFamily: fontFamily.appTextLight,
    marginTop: 3,
  },
  submitText: {
    color: '#333',
    fontFamily: fontFamily.appTextLight,
    marginTop: 30,
  },
  ratingText: {
    color: '#333',
    fontFamily: fontFamily.appTextBold,
    marginTop: 20,
  },
  starContainer: {
    backgroundColor: '#fff',
    width: 315,
    height: 60,
    elevation: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 13,
  },
  reviewText: {
    color: '#333',
    fontFamily: fontFamily.appTextBold,
    marginTop: 30,
  },
  inputField: {
    width: 315,
    height: 237,
    backgroundColor: colors.greyLight,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  input: {
    fontFamily: fontFamily.appTextLight,
    color: colors.lightText,
    padding: 10,
  },
  btn: {
    marginTop: 100,
    backgroundColor: colors.theme,
    height: 50,
    alignItems: 'center',
    width: 315,
    borderRadius: 10,
    justifyContent: 'center',
  },

  btnText: {
    color: colors.white,
    fontFamily: fontFamily.appTextBoldTwo,
  },
});
