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
    width: 313,
    height: 190,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  bodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bodyIcon: {
    width: 20,
    height: 20,
  },
  bodyHeading: {
    color: colors.theme,
    fontFamily: fontFamily.appTextMedium,
  },
  bodyText: {
    fontFamily: fontFamily.appTextLight,
    padding: 15,
  },
});
