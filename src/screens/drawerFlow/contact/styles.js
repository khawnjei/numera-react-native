import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    // flex: 1,
  },
  topContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    gap: 5,
    marginTop: 20,
  },
  arrowIcon: {
    width: 28,
    height: 28,
  },
  headingText: {
    color: '#333',
    fontFamily: fontFamily.appTextLight,
    marginTop: 3,
  },
  questionContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
    marginHorizontal: 20,
  },
  questionContentContainer: {
    backgroundColor: colors.theme,
    width: 250,
    height: 60,
    borderRadius: 8,
    padding: 10,
  },
  questionText: {
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
  },
  questionTime: {
    marginTop: 5,
    color: '#666',
    fontFamily: fontFamily.appTextLight,
  },
  answerContainer: {
    backgroundColor: colors.white,
    width: 190,
    height: 60,
    borderRadius: 8,
    padding: 10,
    elevation: 1,
    marginHorizontal: 20,
    marginTop: 30,
  },
  answerText: {
    color: colors.black,
    fontFamily: fontFamily.appTextLight,
  },
  answerTime: {
    marginTop: 5,
    color: '#666',
    fontFamily: fontFamily.appTextLight,
    marginHorizontal: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 370,
    marginHorizontal: 20,
  },
  inputField: {
    backgroundColor: '#fff',
    width: 250,
    height: 60,
    elevation: 5,
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    marginLeft: 10,
    fontFamily: fontFamily.appTextLight,
    width: '70%',
    height: '70%',
  },
  inputFieldIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  sendIconContainer: {
    backgroundColor: colors.theme,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});
