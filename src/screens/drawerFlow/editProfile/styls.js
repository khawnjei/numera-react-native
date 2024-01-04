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
    marginTop: 20,
    gap: 5,
    marginHorizontal: 20,
  },
  arrow: {
    width: 28,
    height: 28,
  },
  headingText: {
    color: '#333',
    fontFamily: fontFamily.appTextLight,
    marginTop: 3,
  },
  wrapper: {
    marginTop: 25,
  },
  btn: {
    marginTop: 185,
    marginHorizontal: 20,
    backgroundColor: colors.theme,
    height: 50,
    alignItems: 'center',
    width: 320,
    borderRadius: 10,
    justifyContent: 'center',
  },

  btnText: {
    color: colors.white,
    fontFamily: fontFamily.appTextBoldTwo,
  },
  inputField: {
    borderRadius: 4,
    backgroundColor: '#F5F5F5',
    borderColor: '#C7C7C7',
    borderWidth: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 320,
    height: 50,
    marginBottom: 15,
    marginTop: 5,
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  input: {
    width: '83%',
    height: '100%',
    fontFamily: fontFamily.appTextLight,
    marginTop: 5,
  },
  dropdownIcon: {
    width: 13,
    height: 13,
    marginRight: 30,
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 999,
    left: 245,
    top: 245,
  },
  dropdownTextContainer: {
    backgroundColor: '#F5F5F5',
    borderColor: '#C7C7C7',
    width: 80,
    height: 80,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
  },
});
