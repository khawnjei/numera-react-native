import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    marginHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topText: {
    color: colors.theme,
    fontSize: 13,
    fontFamily: fontFamily.appTextBold,
  },
  topIconsContainer: {
    width: 100,
    height: 35,
    backgroundColor: 'rgba(48, 102, 190, 0.20)',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 30,
  },
  piIconContainer: {
    marginLeft: 5,
    marginRight: 5,
  },
  piIcon: {
    width: 15,
    height: 15,
  },
  hintIcon: {
    width: 22,
    height: 22,
  },
  hintCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 17,
    marginTop: 10,
  },
  cosmeticsCardContainer: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 17,
  },
});
