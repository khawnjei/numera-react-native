import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  arrowIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  arrowIcon: {
    width: 25,
    height: 25,
  },
  headingMain: {
    fontFamily: fontFamily.appTextLight,
    color: '#333',
    marginLeft: 10,
    fontSize: 18,
    marginTop: 4,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headingContainer: {
    alignItems: 'center',
    marginRight: 40,
    marginTop: 119,
  },
  mainImage: {
    width: 150,
    height: 113,
  },
  headingText: {
    fontFamily: fontFamily.appTextMedium,
    fontWeight: '700',
    fontSize: 36,
    color: colors.theme,
  },
  mapContainer: {
    marginRight: 15,
    marginTop: 38,
  },
  cardContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.theme,
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
