import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import {navigationRef} from './NavigationService';
import PublicTab from './PublicTab';
import {useColorScheme} from 'react-native';
import AppHeader from '../screens/public_screens/AppHeader';
import SoundPlayer from 'react-native-sound-player';
import SplashScreen from '../screens/public_screens/SplashScreen';
import InternetConnection from '../screens/public_screens/InternetConnection';

import { setConnection } from '../screens/public_screens/redux/actions';
import { Text } from '@rneui/base';

const MyThemeDewfault = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#EC7433',
    text: '#626263',
    background: '#FFFFFF',
    cardShadow: 'rgba(0, 0, 0, 1)',
    inputBg: '#F0F1F5',
    inputColor: '#626263',
  },
};

const MyThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#EC7433',
    text: '#C8C8D3',
    background: '#272A2F',
    cardShadow: 'rgba(0, 0, 0, 1)',
    inputBg: '#393c41',
    inputColor: '#C8C8D3',
  },
};

const RootNavigationStack = ({playing,setConnection,connection}) => {

  NetInfo.addEventListener(state => {
    setConnection(state);
  });

  const [splash, setSplash] = useState(true);
  useEffect(() => {
    if (playing && !splash && connection?.isConnected && connection?.isInternetReachable) {
      SoundPlayer.setVolume(0.5);
      SoundPlayer.playUrl('https://ozelfm.80.yayin.com.tr/;stream/1#.mp3');
    } else {
      SoundPlayer.stop();
    }
    return () => {
      SoundPlayer.pause();
    };
  }, [playing,splash,connection]);

  setTimeout(() => {
    setSplash(false);
  }, 2000);

  const scheme = useColorScheme();
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? MyThemeDark : MyThemeDewfault}>

      {splash? (
        <SplashScreen />
      ) : (
        <>
          <AppHeader />
          {(connection?.isConnected && connection?.isInternetReachable)?
          <PublicTab />:<InternetConnection/>
        }
          
        </>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  playing: state.public_reducer.playing,
  connection: state.public_reducer.connection,
});
const mapDispatchToProps = dispatch => ({
  setConnection: (data) =>
    dispatch(setConnection(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootNavigationStack);
