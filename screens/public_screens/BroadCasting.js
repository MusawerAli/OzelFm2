import React, {useMemo, useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {weeksName} from '../../Utils/const';
import {ChipComponent} from '../../components/CommonComponents';
import StepIndicator from 'react-native-step-indicator';
import WeekDetailCard from './BroadCastComponents/WeekDetailCard';
import {requestWeekData} from './redux/actions';
import {Icon} from '@rneui/base';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 7,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 19,
  currentStepLabelColor: '#fe7013',
};

export const BroadCasting = ({weekData, requestWeekData, nowData}) => {
  const currentDate = new Date();
  const weekDayNumber = currentDate.getDay();
  const [currentWeek, setCurrentWeek] = useState();
  const [labels, setLabels] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(0);
  const {colors} = useTheme();
  const dimessions = Dimensions.get('window');
  const styles = useMemo(
    () => makeStyles(colors, dimessions),
    [colors, dimessions],
  );

  useEffect(() => {
    setCurrentWeek(weekDayNumber === 0 ? 7 : weekDayNumber)
  }, []);
  
  useEffect(() => {
    if (weekData?.data && weekData?.data?.length > 0) {
      const lab = weekData.data.map(val => val.saat);
      setLabels(lab);
    }
  }, [weekData]);


  useEffect(() => {
    if (
      labels &&
      labels.length > 0 &&
      nowData.saat &&
      weekData.today == currentWeek
    ) {
      setCurrentEvent(labels.indexOf(nowData.saat));
    } else {
      setCurrentEvent(0);
    }
  }, [labels]);

  useEffect(() => {
    requestWeekData({day: currentWeek});
  }, [currentWeek]);
  return (
    <ScrollView style={{marginBottom: 65}}>
      <View style={styles.main}>
        <Text style={styles.heading}>Yayın Akışı</Text>
      </View>
      <ScrollView horizontal={true} style={{marginTop: 25}}>
        {weeksName.map((item, i) => {
          return (
            <ChipComponent
            titleStyle={{color:colors.text}}
              // color="white"
              title={item?.name}
              key={i}
              iconRight
              containerStyle={styles.weeksChipContainer}
              buttonStyle={[
                styles.weeksChipButton,
                {
                  backgroundColor:
                    currentWeek === item?.value
                      ? colors.primary
                      : colors.inputBg,
                },
              ]}
              onPress={() => setCurrentWeek(item?.value)}
            />
          );
        })}
      </ScrollView>
      <View style={styles.stepMain}>
        <View style={styles.stepLeft}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentEvent}
            labels={labels}
            direction="vertical"
            stepCount={labels.length}
            renderStepIndicator={({position, stepStatus}) => {
              return (stepStatus === 'finished') ? <Icon name="check-circle" type="material-icons" /> : (stepStatus === 'current' ? <Icon name="live-tv" color="#2AAA8A" type="material-icons" /> : <Icon name="hearing" color="#fe7013" type="material-icons" />)
            }}
          />
        </View>

        <View style={styles.stepRight}>
          {weekData?.data &&
            weekData?.data.length > 0 &&
            weekData?.data.map((val, i) => (
              <WeekDetailCard key={i} val={val} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const makeStyles = (colors, dimessions) =>
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
    weeksMain: {},
    weeksChipContainer: {
      minWidth: 106,
      marginLeft: 10,
      marginBottom: 10,
    },
    weeksChipButton: {
      // backgroundColor: colors.primary,
      color: colors.text,
      marginLeft: 10,
      minWidth: 106,
      // color: colors.text,
    },
    stepMain: {
      minHeight: 500,
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
    },
    stepLeft: {
      minWidth: 120,
      overflow: 'scroll',
    },
    stepRight: {
      width: dimessions.width - 150,
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

export default connect(mapStateToProps, mapDispatchToProps)(BroadCasting);
