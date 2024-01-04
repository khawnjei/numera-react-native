import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#3066BE33',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontFamily: fontFamily.appTextMedium,
    fontSize: 11,
  },
});
