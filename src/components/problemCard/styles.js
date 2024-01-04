import {colors} from '../../services/utilities/colors';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  cardContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.theme,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
