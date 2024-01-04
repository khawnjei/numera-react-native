import {Modal} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {colors} from '../../services/utilities/colors';
import {fontFamily} from '../../services/utilities/fonts';

const CalendarPopup = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      style={{
        height: 368,
        width: 327,
        borderRadius: 12,
      }}
      theme={{
        backgroundColor: '#fff',
        calendarBackground: colors.theme,
        textSectionTitleColor: '#fff',
        selectedDayBackgroundColor: '#fff',
        selectedDayTextColor: colors.theme,
        todayTextColor: colors.theme,
        dayTextColor: '#fff',
        textDisabledColor: '#000',
        textDayFontFamily: fontFamily.appTextLight,
        textMonthFontFamily: fontFamily.appTextLight,
        textDayHeaderFontFamily: fontFamily.appTextLight,
        monthTextColor: '#fff',
        todayBackgroundColor: '#fff',
        arrowColor: '#fff',
      }}
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'orange',
        },
      }}
    />
  );
};

export default CalendarPopup;
