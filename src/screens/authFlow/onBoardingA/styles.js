import {StyleSheet} from 'react-native';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  container: {
    marginTop: 20,
  },
  imageContent: {
    alignItems: 'center',
  },
  imageMain: {
    width: 324.099,
    height: 298,
  },
  textContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.theme,
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 36,
    textAlign: 'center',
  },
  bodyText: {
    color: colors.grey,
    paddingTop: 15,
    width: 286,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: fontFamily.appTextLight,
    lineHeight: 25,
    textAlign: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme,
    borderRadius: 2,
    marginTop: 20,
  },
  btn: {
    marginTop: 70,
    marginHorizontal: 13,
    backgroundColor: colors.theme,
    height: 50,
    alignItems: 'center',
    width: 330,
    borderRadius: 10,
    justifyContent: 'center',
  },

  btnText: {
    color: colors.white,
    fontFamily: fontFamily.appTextBoldTwo,
  },
  bottomText: {
    alignItems: 'center',
    marginTop: 75,
  },
  bottomBody: {
    color: colors.grey,
    fontFamily: fontFamily.appTextLight,
  },
  wrapper: {
    marginTop: 20,
  },
  wrapper: {
    flex: 1,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
