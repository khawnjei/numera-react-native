import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  arrowIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  headingMain: {
    fontFamily: fontFamily.appTextLight,
    color: '#333',
    marginLeft: 10,
    fontSize: 18,
    marginTop: 4,
  },
  mainContainer: {
    marginHorizontal: 20,
    marginTop: 31,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    color: colors.theme,
    fontSize: 13,
    fontFamily: fontFamily.appTextMedium,
  },
  topIconsContainer: {
    width: 100,
    height: 35,
    backgroundColor: 'rgba(48, 102, 190, 0.20)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  piIcon: {
    width: 15,
    height: 15,
  },
  hintIcon: {
    width: 22,
    height: 22,
  },
  cardContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 44,
  },
  headingContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
  },
  headingTextNumber: {
    fontFamily: fontFamily.appTextRegular,
    color: '#E63946',
    marginRight: 8,
  },
  bottomContainer: {
    backgroundColor: colors.greyLight,
    width: 310,
    height: 137,
    borderRadius: 8,
    marginTop: 10,
  },
  bottomText: {
    padding: 20,
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginRight: 9,
    marginTop: 20,
  },
  btn: {
    width: 144,
    height: 48,
    backgroundColor: colors.theme,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontFamily: fontFamily.appTextBoldTwo,
    textAlign: 'center',
  },
});
