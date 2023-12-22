import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    backgroundColor: colors.greyLight,
    borderWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 320,
    height: 50,
  },
  emailIcon: {
    width: 17,
    height: 17,
    marginLeft: 5,
  },
  input: {
    width: '83%',
    height: '100%',
    fontFamily: fontFamily.appTextLight,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  dropdownIcon: {
    width: 13,
    height: 13,
    marginRight: 10,
  },
});
