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
import Icons from '../components/Icons';
const Tab = createBottomTabNavigator();

const PublicTab = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {playing} = useSelector(state => state.public_reducer);
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <Tab.Navigator
      initialRouteName="listen"
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
              {focused?<Icons.RadioActive width={28} height={27}/>:<Icons.Radio width={28} height={27}/>}
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
              {focused?<Icons.CalandarActive width={28} height={27}/>:<Icons.Calandar width={28} height={27}/>}
              
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
                {playing?<Icons.Pause onPress={() => dispatch(setPlay(!playing))} width={100} height={100}/>:<Icons.PlayBlack onPress={() => dispatch(setPlay(!playing))} width={100} height={100}/>}
                
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
             {focused?<Icons.MailActive width={28} height={27}/>:<Icons.Mail width={28} height={27}/>}
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
              {focused?<Icons.PhoneActive width={26} height={26}/>:<Icons.Phone width={26} height={26}/>}
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
