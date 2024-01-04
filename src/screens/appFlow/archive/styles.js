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
    marginTop: 30,
  },
  headingText: {
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
  },
});
