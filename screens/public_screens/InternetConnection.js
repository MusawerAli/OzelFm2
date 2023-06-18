import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/base';

export const InternetConnection = ({}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.main}>
      <Text h2 style={styles.text}>
      İnternet Bağlantı Sorunu
      </Text>
    </View>
  );
};

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      backgroundColor:colors.background,
      width: '100%',
      alignItems: 'center',
      height: '100%',
      display:'flex',
      justifyContent:'center'
    },
    container: {
      width: 350,
      height: 350
    },
    text: {
      color: colors.primary,
    },
  });

export default InternetConnection;
