import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#0000004D',
    zIndex: 999,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    width: 260,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  bodyHeading: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
  },
  bodyText: {
    fontFamily: fontFamily.appTextLight,
    marginHorizontal: 20,
    marginTop: 5,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  cancelBtn: {
    width: 90,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextLight,
  },
  shopBtn: {
    width: 90,
    height: 40,
    backgroundColor: colors.theme,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopBtnText: {
    color: 'white',
    fontFamily: fontFamily.appTextLight,
  },
});
