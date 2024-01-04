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
    width: 74,
    height: 35,
    backgroundColor: 'rgba(48, 102, 190, 0.20)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  piIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  inputText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
    fontWeight: '400',
    fontSize: 15,
  },
  inputBodyContainer: {
    width: 313,
    height: 90,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C7C7C7',
    marginTop: 3,
  },
  inputBodyText: {
    padding: 15,
    fontFamily: fontFamily.appTextLight,
  },
  answerText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
    fontWeight: '400',
    fontSize: 15,
  },
  answerBodyContainer: {
    width: 313,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#FDC4C4',
    justifyContent: 'center',
    marginTop: 3,
  },
  answerBodyText: {
    fontFamily: fontFamily.appTextMedium,
    marginLeft: 10,
  },
  solutionText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
    fontWeight: '400',
    fontSize: 15,
  },
  solutionBodyContainer: {
    width: 313,
    height: 190,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C7C7C7',
    marginTop: 3,
  },
  solutionBodyText: {
    padding: 15,
    fontFamily: fontFamily.appTextLight,
  },
});
