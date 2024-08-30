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
import {useColorScheme, View, Text, Modal, Image, StyleSheet, Button} from 'react-native';
import AppHeader from '../screens/public_screens/AppHeader';
import SoundPlayer from 'react-native-sound-player';
import SplashScreen from '../screens/public_screens/SplashScreen';
import InternetConnection from '../screens/public_screens/InternetConnection';
import { setConnection } from '../screens/public_screens/redux/actions';
import Ozel from '../assets/tab_icons/OZEL.png';
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

const RootNavigationStack = ({playing, setConnection, connection}) => {
  const [splash, setSplash] = useState(true);
  const [modalVisible, setModalVisible] = useState(true); // Open modal automatically

  NetInfo.addEventListener(state => {
    setConnection(state);
  });

  useEffect(() => {
    if (playing && !splash) {
      SoundPlayer.setVolume(0.5);
      SoundPlayer.playUrl('https://ozelfm.80.yayin.com.tr/;stream/1#.mp3');
    } else {
      SoundPlayer.stop();
    }
    return () => {
      SoundPlayer.stop();
    };
  }, [playing, splash]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!splash) {
      // Automatically close modal after 3 seconds
      const modalTimer = setTimeout(() => {
        setModalVisible(false);
      }, 3000);

      return () => clearTimeout(modalTimer);
    }
  }, [splash]);

  const scheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={scheme === 'dark' ? MyThemeDark : MyThemeDewfault}>
      
      {splash ? (
        <SplashScreen />
      ) : (
        <>
          <AppHeader />
          {(connection?.isConnected && connection?.isInternetReachable)
            ? <PublicTab />
            : <InternetConnection />
          }

          {/* Fullscreen Modal */}
          <Modal
            animationType="fade"
            transparent={true} // Make the background transparent
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Image
                source={require('../assets/tab_icons/OZEL.png')} // Replace with your image URL
                style={styles.fullscreenImage}
              />
            </View>
          </Modal>
        </>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent background with a slight overlay
  },
  fullscreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust this to 'cover' if you want to cover the screen
  },
});

const mapStateToProps = state => ({
  playing: state.public_reducer.playing,
  connection: state.public_reducer.connection,
});
const mapDispatchToProps = dispatch => ({
  setConnection: (data) => dispatch(setConnection(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootNavigationStack);
