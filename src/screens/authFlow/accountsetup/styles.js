import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
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
  eyeIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  arrowIcon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 22,
    fontFamily: fontFamily.appTextBoldTwo,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  wrapper: {
    marginTop: 45,
  },
  genderField: {
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
  inputText: {
    fontFamily: fontFamily.appTextLight,
    fontSize: 14,
    marginLeft: 21,
    marginBottom: 10,
  },
  btn: {
    marginVertical: 150,
    marginHorizontal: 17,
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
  dropdownIcon: {
    width: 13,
    height: 13,
    marginRight: 30,
  },
  dropdownContainer: {
    position: 'absolute',
    zIndex: 999,
    left: 245,
    top: 190,
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
