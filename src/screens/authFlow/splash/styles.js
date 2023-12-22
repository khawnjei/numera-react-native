import {StyleSheet} from 'react-native';
import {colors} from '../../../services/utilities/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme,
  },

  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomText: {
    alignItems: 'center',
    marginBottom: 8,
  },

  text: {
    color: colors.white,
  },
});
