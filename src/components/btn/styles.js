import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
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
