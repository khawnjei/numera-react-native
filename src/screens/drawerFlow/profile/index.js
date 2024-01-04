import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../components/header';
import {appIcons, appImages} from '../../../services/utilities/assets';
import {styles} from './styles';

const Profile = ({navigation}) => {
  const ProfileOptions = [
    {
      id: 1,
      icon: require('../../../assets/icons/EditProfileGrey.png'),
      title: 'Edit Profile',
      route: () => navigation.push('EditProfile'),
    },
    {
      id: 2,
      icon: require('../../../assets/icons/profileLock.png'),
      title: 'Change Password',
      route: () => navigation.push('ChangePassword'),
    },
    {
      id: 3,
      icon: require('../../../assets/icons/privacyPolicy.png'),
      title: 'Privacy Policy',
      route: () => navigation.push('PrivacyPolicy'),
    },
  ];

  return (
    <View style={styles.outerContainer}>
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Header navigation={navigation} title={'PROFILE'} />
        <View style={styles.mainContainer}>
          <TouchableOpacity>
            <Image source={appImages.profileImg} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editIconContainer}>
            <Image source={appIcons.editProfileIcon} style={styles.editIcon} />
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            <Text style={styles.imageText}>Alex Matheson</Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          {ProfileOptions.map(item => (
            <ProfileField key={item.id} item={item} navigation={navigation} />
          ))}
        </View>
      </View>
    </View>
  );
};

const ProfileField = ({item}) => {
  return (
    <TouchableOpacity style={styles.profileField} onPress={item.route}>
      <View style={styles.profileFieldContent}>
        <Image source={item.icon} style={styles.profileFieldIconMain} />
        <Text style={styles.profileFieldText}>{item.title}</Text>
      </View>
      <View>
        <Image
          source={appIcons.arrowRightBlueIcon}
          style={styles.profileFieldIconRight}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Profile;
