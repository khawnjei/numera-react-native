import {fontFamily} from '../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    fontFamily: fontFamily.appTextLight,
    color: '#333',
    marginLeft: 10,
    fontSize: 18,
    marginTop: 4,
  },
});
