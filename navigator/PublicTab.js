import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Icon} from '@rneui/themed';
import {useTheme} from '@react-navigation/native';
import About from '../screens/public_screens/About';
import Contact from '../screens/public_screens/Contact';
import BroadCasting from '../screens/public_screens/BroadCasting';
import LIsten from '../screens/public_screens/LIsten';
import {useDispatch,useSelector} from 'react-redux';
import {setPlay} from '../screens/public_screens/redux/actions';
const Tab = createBottomTabNavigator();

const PublicTab = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {playing} = useSelector(state => state.public_reducer);
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <Tab.Navigator
      initialRouteName="broadcasting"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.background,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        },
      }}>
      <Tab.Screen
        name="listen"
        component={LIsten}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.tabsView}>
              <Icon
                name="radio"
                // type='evilicon'
                color={color}
              />
              <Text
                style={[
                  styles.text,
                  color,
                  {color: focused ? colors.primary : colors.text},
                ]}>
                Dinle
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="broadcasting"
        component={BroadCasting}
        options={{
          tabBarLabel: 'broadcasting',
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.tabsView}>
              <Icon name="calendar" type="evilicon" color={color} />
              <Text
                style={[
                  styles.text,
                  color,
                  {color: focused ? colors.primary : colors.text},
                ]}>
                Yayin
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="play"
        component={LIsten}
        options={{
          tabBarLabel: 'playy',
          tabBarButton: ({childern}) => (
            <TouchableOpacity
              style={{
                top: -30,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Icon
                onPress={() => dispatch(setPlay(!playing))}
                reverse
                solid="true"
                name={playing?"pause-circle-outline":"play-circle-filled"} 
                type="material-icons"
                color={colors.primary}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{
          tabBarLabel: 'contact',
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.tabsView}>
              <Icon
                name="email"
                type="material-icons"
                color={color}
              />
              <Text
                style={[
                  styles.text,
                  color,
                  {color: focused ? colors.primary : colors.text},
                ]}>
                Istek
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="about"
        component={About}
        options={{
          tabBarLabel: 'about',
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.tabsView}>
              <Icon name="phone" type="material-icons" color={color} />
              <Text
                style={[
                  styles.text,
                  color,
                  {color: focused ? colors.primary : colors.text},
                ]}>
                Biz
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const makeStyles = colors =>
  StyleSheet.create({
    tabsView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      // color: colors.text,
    },
  });
export default PublicTab;
