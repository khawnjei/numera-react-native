import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
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
  wrapper: {
    marginTop: 25,
  },
  btn: {
    marginTop: 250,
    marginHorizontal: 20,
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
});
