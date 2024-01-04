import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {appIcons} from '../../../services/utilities/assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Contact = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    setInputValue(text);
  };

  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={appIcons.arrowIcon} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headingText}>SUPPORT TEAM</Text>
      </View>

      <View style={styles.questionContainer}>
        <View style={styles.questionContentContainer}>
          <Text style={styles.questionText}>
            Hi, where to show my progress and how can i mange this?
          </Text>
        </View>
        <Text style={styles.questionTime}>08:53 am</Text>
      </View>
      <View>
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>
            ok please let us know what is issue
          </Text>
        </View>
        <Text style={styles.answerTime}>08:53 am</Text>
      </View>
      <KeyboardAvoidingView
      // keyboardVerticalOffset={1400}
      // style={{flexGrow: 1}}
      // behavior="padding"
      >
        <View style={styles.bottomContainer}>
          <View style={styles.inputField}>
            <TextInput
              onChangeText={handleInputChange}
              value={inputValue}
              style={styles.input}
              placeholder="Type a message"
            />
            <TouchableOpacity>
              <Image
                source={appIcons.cameraIcon}
                style={styles.inputFieldIcon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleButtonPress}
              style={styles.sendIconContainer}>
              <Image source={appIcons.sendIcon} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Contact;
