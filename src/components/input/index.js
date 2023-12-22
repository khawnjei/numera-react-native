import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {appIcons} from '../../services/utilities/assets';
import {styles} from './styles';

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
  // eyeIconColor,
}) => {
  const eyeIconColor = secure ? 'rgb(128, 128, 128)' : 'rgb(48, 102, 190)';

  return (
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
          // eyeIconColor={eyeIconColor}
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
  );
};

export default Input;
