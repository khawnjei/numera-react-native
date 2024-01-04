import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../services/utilities/colors';
import {fontFamily} from '../../../services/utilities/fonts';
import {appIcons} from '../../../services/utilities/assets';
import CalendarPopup from '../../../components/calendar';
import {styles} from './styles';
import Header from '../../../components/header';

const Progress = ({navigation}) => {
  const [calendar, setCalendar] = useState(false);

  const handleCalendar = () => setCalendar(!calendar);

  return (
    <>
      {calendar && (
        <View style={styles.popupContainer}>
          <CalendarPopup />
        </View>
      )}
      <View style={styles.outerContainer}>
        <View style={{marginHorizontal: 20}}>
          <Header title={'PROGRESS'} navigation={navigation} />
        </View>
        <View style={styles.topContainer}>
          <Text style={styles.topText}>YOUR PROGRESS IS HERE</Text>
          <View style={styles.datePicker}>
            <Text style={styles.datePickerText}>Choose Date From Calender</Text>
            <TouchableOpacity onPress={handleCalendar}>
              <Image
                style={styles.datePickerIcon}
                source={appIcons.calendarIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Progress;
