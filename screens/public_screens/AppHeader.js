import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Share,Alert} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Icon} from '@rneui/themed';

const AppHeader = ({}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Özel FM Canlı yayın',
        message: "https://play.google.com/store/apps/details?id=com.ayakkabialdim.ozelfm",
        url: 'https://play.google.com/store/apps/details?id=com.ayakkabialdim.ozelfm',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          //Alert.alert('trest');
        } else {
          Alert.alert('Uygulama Paylaşıldı');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={[styles.main]}>
      <Image
        source={{
          uri: 'https://ozelfm.net/wp-content/uploads/2018/06/ozelfm-logo.png',
        }}
        style={{width: 60, height: 60}}
      />
      <TouchableOpacity>
        <Icon
          name="share-google"
          onPress={onShare}
          size={50}
          type="evilicon"
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
      alignItems: 'center',
    },
    image: {
      height: 50,
      width: 50,
    },
  });
