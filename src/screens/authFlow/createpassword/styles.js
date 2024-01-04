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
  },
});
