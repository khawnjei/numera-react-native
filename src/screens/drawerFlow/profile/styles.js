import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 120,
  },
  editIconContainer: {
    backgroundColor: colors.theme,
    borderRadius: 14,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    bottom: 45,
    left: 194,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  imageText: {
    color: colors.theme,
    fontFamily: fontFamily.appTextBold,
  },
  profileField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileFieldContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileFieldIconMain: {
    width: 25,
    height: 25,
  },
  profileFieldText: {
    color: '#333',
    fontFamily: fontFamily.appTextLight,
    fontWeight: '400',
    fontSize: 16,
    marginTop: 5,
  },
  profileFieldIconRight: {
    width: 30,
    height: 30,
  },
});
