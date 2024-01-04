import {View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Input = ({
  value,
  placeholder,
  onChangeText,
  onBlur,
  icon,
  eyeIcon,
  secure,
  autoCorrect,
  keyboardType,
  showPassword,
  editable,
}) => {
  const eyeIconColor = secure ? 'rgb(128, 128, 128)' : 'rgb(48, 102, 190)';

  const handleScrollViewPress = () => {
    // Dismiss the keyboard
    Keyboard.dismiss();
  };

  return (
    <>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        // style={{flex: 1, padding: 16}}
        // contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      >
        <View style={[styles.inputField]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.emailIcon} source={icon} />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor="#444"
              keyboardType={keyboardType}
              autoCapitalize="none"
              onChangeText={onChangeText}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secure}
              autoCorrect={autoCorrect}
              editable={editable}
            />
          </View>
          {eyeIcon && (
            <TouchableOpacity onPress={showPassword}>
              <Image
                style={[styles.eyeIcon, {tintColor: eyeIconColor}]}
                source={appIcons.eyeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Input;
