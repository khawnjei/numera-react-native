import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    width: 150,
    height: 120,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 2,
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  contentImage: {
    width: 50,
    height: 45,
  },
  contentText: {
    color: colors.black,
    fontFamily: fontFamily.appTextMedium,
    marginTop: 3,
  },
  btn: {
    backgroundColor: colors.theme,
    width: 150,
    height: 35,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  btnText: {
    color: 'white',
    fontFamily: fontFamily.appTextRegular,
  },
  btnIcon: {
    width: 10,
    height: 10,
  },
});
