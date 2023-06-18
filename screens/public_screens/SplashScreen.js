import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Image} from '@rneui/themed';

import {View, StyleSheet} from 'react-native';
import {Text} from '@rneui/base';

export const SplashScreen = ({}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.main}>
      <Image
        transition
        transitionDuration={100}
        source={require('../../assets/tab_icons/splash_bg.png')}
        style={styles.container}
      />
      <Image
        transition
        transitionDuration={200}
        source={{
          uri: 'https://ozelfm.net/wp-content/uploads/2018/06/ozelfm-logo.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text h3 style={styles.text}>
        www.ozelfm.net
      </Text>
    </View>
  );
};

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      backgroundColor:
        'linear-gradient(180deg, #EC7433 0%, rgba(236, 116, 51, 0.865625) 99.99%, rgba(236, 116, 51, 0.57) 100%)',
      width: '100%',
      alignItems: 'center',
      height: '100%',
    },
    container: {
      width: 400,
      height: 400,
    },
    text: {
      color: '#FFFFFF',
    },
  });

export default SplashScreen;
