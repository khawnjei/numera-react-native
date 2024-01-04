import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    width: 313,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  topContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  topText: {
    fontFamily: fontFamily.appTextMedium,
    textDecorationLine: 'underline',
    color: colors.theme,
  },
  textBodyContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  textBody: {
    fontFamily: fontFamily.appTextLight,
    color: colors.grey,
  },
});
