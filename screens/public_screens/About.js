import React, {useMemo} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Card} from '@rneui/themed';
import {Icon} from '@rneui/base';

export const About = () => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const openInMaps = () => {
    const address =
      'Ihlamurkuyu, Alemdağ Cd No:11 D:1, 34771 Dudullu Osb/Ümraniye/İstanbul';
    const url = `https://www.google.com/maps/place/${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };
  const callContact = () => {
    const phoneNumber = '05559779013';
    const url = `tel:${phoneNumber}`;
    Linking.openURL(url);
  };

  const sendEmail = () => {
    const recipient = 'ozelfm@ozelfm.net';
    const url = `mailto:${recipient}`;
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.heading}>İletişim</Text>
        <Text style={styles.heading_child}>Bize Ulaşın</Text>
        <Text style={styles.desc}>
          Görüş, istek , öneri ve reklam işbirlikleriniz için bizimle irtibat
          kurabilirsiniz
        </Text>
        {/* //adress */}
        <View style={styles.textIconMain}>
          <Icon
            onPress={openInMaps}
            name="location-pin"
            type="material-icons"
            color={colors.primary}
          />

          <Text onPress={openInMaps} style={styles.heading_child}>
            Adres
          </Text>
        </View>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={openInMaps}>
            <Text style={styles.textCard}>
              Görüş, istek , öneri ve reklam işbirlikleriniz için bizimle
              irtibat kurabilirsiniz
            </Text>
          </TouchableOpacity>
        </Card>

        {/* //phone */}
        <View style={styles.textIconMain}>
          <Icon
            onPress={callContact}
            name="phone"
            type="material-icons"
            color={colors.primary}
          />
          <Text onPress={callContact} style={styles.heading_child}>
            Telefon
          </Text>
        </View>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={callContact}>
            <Text style={styles.textCard}>Telefon: 0 216 611 01 23 - 24</Text>
            <Text style={styles.textCard}>Reklam İrtibat : 0555 977 90 13</Text>
          </TouchableOpacity>
        </Card>

        {/* //email */}
        <View style={styles.textIconMain}>
          <Icon name="email" type="material-icons" color={colors.primary} />
          <Text onPress={sendEmail} style={styles.heading_child}>
            Eposta
          </Text>
        </View>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={sendEmail}>
            <Text style={styles.textCard}>ozelfm@ozelfm.net</Text>
          </TouchableOpacity>
        </Card>
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
    heading_child: {
      color: colors.text,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 30,
      alignItems: 'center',
    },
    desc: {
      color: colors.text,
      fontSize: 15,
      fontWeight: 400,
      lineHeight: 22,
      alignItems: 'center',
      top: 10,
    },
    textCard: {
      color: colors.text,
    },
    card: {
      backgroundColor: colors.background,
      borderRadius: 10,
      borderColor: colors.background,
      shadowColor: colors.cardShadow,
      shadowOpacity: 1,
      shadowRadius: 5,
      borderStyle: 'dotted',
      minHeight: 70,
      alignItems: 'center',
    },
    textIconMain: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
    },
    textIcon: {},
  });
export default About;
