import React, {useMemo, useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Avatar} from '@rneui/themed';
import {connect} from 'react-redux';
import {requestWeekData} from './redux/actions';
import WeekDetailCard from './BroadCastComponents/WeekDetailCard';
export const LIsten = ({weekData, requestWeekData, nowData, playing}) => {
  const currentDate = new Date();
  const weekDayNumber = currentDate.getDay();
  const [currentWeek, setCurrentWeek] = useState();
  const [radioIcon, setRadioIcon] = useState('');

  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  useEffect(() => {
    requestWeekData({day: currentWeek});
  }, [currentWeek]);

    useEffect(() => {
    setCurrentWeek(weekDayNumber === 0 ? 7 : weekDayNumber)
  }, []);

  const getInfo = () => {
    SoundPlayer.onFinishedLoading(success => {});
  };
  useEffect(() => {
    
    if(nowData){
      const img = nowData?.img !== '' ? nowData.img : nowData.icon;
      const radioIcon =
        img !== ''
          ? img
          : 'https://ozelfm.net/mobile_program/ios/icons/muslim.png';
      setRadioIcon(radioIcon);
    }
    const upData =
      weekData &&
      weekData.data.length > 0 &&
      weekData.data.filter(val => val.status === false);
  }, [nowData]);

  return (
    <ScrollView style={{marginBottom: 65}}>
      <View style={styles.main}>
        <Text style={styles.heading}>Özel Fm 103.2</Text>
        <View style={styles.avatarView}>
          {radioIcon?(
            <Avatar
            size={250}
            rounded
            icon={{
              name: 'radio',
              type: 'material',
              color: '#EC7433',
              size: 150,
            }}
            source={{uri: radioIcon??"https://ozelfm.net/mobile_program/ios/icons/muslim.png"}}
            containerStyle={styles.avatarContainer}
            avatarStyle={styles.avatarStyle}
          />
          ):
          <Avatar
            size={250}
            rounded
            icon={{
              name: 'radio',
              type: 'material',
              color: '#EC7433',
              size: 150,
            }}
            source={{uri:"https://ozelfm.net/mobile_program/ios/icons/muslim.png"}}
            containerStyle={styles.avatarContainer}
            avatarStyle={styles.avatarStyle}
          />
          }
          
          <WeekDetailCard  val={nowData} />
        </View>
        <Text style={styles.title}>Sıradaki Yayınlar</Text>
        <ScrollView horizontal={true} style={{marginTop: 10}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 30,
              marginRight: 10,
              marginLeft: 10,
              marginBottom:10
            }}>
            {weekData &&
              weekData.data.length > 0 &&
              weekData.data
                .filter(val => val.status === false)
                .map((val, id) => <WeekDetailCard key={id} val={val} />)}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      paddingLeft: 25,
      paddingTop: 20,
    },
    heading: {
      color: colors.text,
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 30,
    },
    title: {
      color: colors.text,
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 30,
    },
    avatarView: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    avatarContainer: {},
    avatarStyle: {
      borderWidth: 3,
      borderColor: colors.primary,
      borderTopLeftRadius: 1,
      // borderStyle: 'solid',
    },
  });

const mapStateToProps = state => ({
  weekData: state.public_reducer.weekData,
  nowData: state.public_reducer.nowData,
});

const mapDispatchToProps = dispatch => ({
  requestWeekData: (params, loading) =>
    dispatch(requestWeekData(params, loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LIsten);
