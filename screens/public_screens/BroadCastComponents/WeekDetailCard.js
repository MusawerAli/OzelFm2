import React, {useMemo} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {color} from '@rneui/base';
export const WeekDetailCard = ({val}) => {
  const dimessions = Dimensions.get('window');
  const {colors} = useTheme();
  const styles = useMemo(
    () => makeStyles(colors, dimessions),
    [colors, dimessions],
  );
  return (
    <View style={styles.main}>
      <Image source={{uri:((val?.icon!=="")?val?.icon:"https://ozelfm.net/wp-content/uploads/2018/06/ozelfm-logo.png")??"https://ozelfm.net/wp-content/uploads/2018/06/ozelfm-logo.png"}} style={{width: 40, height: 40}}/>
      <View style={styles.card}>
      <Text style={styles.saat}>
        {val?.saat}
        </Text>
        <Text
          style={[
            styles.textTitle,
            {fontWeight: 600, fontSize: 15, lineHeight: 20},
          ]}>
          {val?.baslik}
        </Text>
        <Text style={styles.textTitle}>
        {val?.sunucu}
        </Text>
      </View>
    </View>
  );
};

const makeStyles = (colors, dimessions) =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.inputBg,
      paddingLeft: 25,
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 10,
      textAlign: 'center',
      alignItems: 'center',
      minHeight: 65,
      maxWidth: dimessions.width - 100,
      borderRadius: 15,
      marginTop:50

      //   width: dimessions.width-200,
    },
    card: {
      maxWidth: dimessions.width - 150,
      marginBottom: 10,

      //   overflow:'scroll'
    },
    saat:{
      color: colors.text,
    },
    textTitle: {
      textAlign: 'auto',
      width: dimessions.width - 230,
      color: colors.text,
    },
  });
export default WeekDetailCard;
