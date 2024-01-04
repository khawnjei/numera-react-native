import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  popupContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 999,
    backgroundColor: '#0000004D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  topText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
    fontSize: 24,
    textAlign: 'center',
  },
  datePicker: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerText: {
    color: colors.lightBlack,
    fontFamily: fontFamily.appTextLight,
  },
  datePickerIcon: {
    width: 28,
    height: 28,
  },
});
