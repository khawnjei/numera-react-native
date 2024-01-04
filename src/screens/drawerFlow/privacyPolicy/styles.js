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
  contentContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  bodyText: {
    fontFamily: fontFamily.appTextLight,
    color: '#666',
    lineHeight: 21,
  },
});
