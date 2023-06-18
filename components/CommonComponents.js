import React from 'react';
import {TextInput, Alert} from 'react-native';
import {Button, Chip} from '@rneui/themed';

export const ButtonComponent = ({
  buttonStyle,
  containerStyle,
  disabled,
  disabledStyle,
  disabledTitleStyle,
  icon,
  iconContainerStyle,
  iconRight,
  iconPosition,
  linearGradientProps,
  loadingProps,
  loadingStyle,
  onPress,
  raised,
  title,
  titleProps,
  titleStyle,
  TouchableComponent,
  type,
  ViewComponent,
  loading,
}) => {
  return (
    <Button
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      disabled={disabled}
      disabledStyle={disabledStyle}
      disabledTitleStyle={disabledTitleStyle}
      icon={icon}
      iconContainerStyle={iconContainerStyle}
      iconRight={iconRight}
      iconPosition={iconPosition}
      linearGradientProps={linearGradientProps}
      loading={loading}
      loadingProps={loadingProps}
      loadingStyle={loadingStyle}
      onPress={onPress}
      raised={raised}
      title={title}
      titleProps={titleProps}
      titleStyle={titleStyle}
      TouchableComponent={TouchableComponent}
      type={type}
      ViewComponent={ViewComponent}
    />
  );
};

export const TextInputComponent = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  style,
  multiline,
  numberOfLines,
  placeholderTextColor='#C8C8D3',
  inputMode="text",
  keyboardType = 'text',

}) => {
  return (
    <TextInput
      
      style={style}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      // keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={numberOfLines}
      inputMode={inputMode}
      placeholderTextColor={placeholderTextColor}
    />
  );
};
export const AlertComponent = ({
  title,
  msg,
  cancelable,
  onDismiss,
}) => {
  const alert = (title, msg, cancelable, onDismiss) => {
    Alert.alert(
      title,
      msg,
      [
        {
          text: 'Tamam',
          onPress: () => onDismiss,
          style: 'cancel',
        },
      ],
      {
        cancelable: cancelable,
        onDismiss: onDismiss,
      },
    );
  };
  alert(
    title = {title},
    msg = {msg},
    cancelable = {cancelable},
    onDismiss = {onDismiss},
  );
};

export const ChipComponent = ({
  buttonStyle,
  containerStyle,
  disabled,
  disabledStyle,
  disabledTitleStyle,
  icon,
  iconContainerStyle,
  iconRight,
  iconPosition,
  linearGradientProps,
  loadingProps,
  loadingStyle,
  onPress,
  raised,
  title,
  titleProps,
  titleStyle,
  TouchableComponent,
  type,
  ViewComponent,
  loading,
  color,
}) => {
  return (
    <Chip
      buttonStyle={buttonStyle}
      containerStyle={containerStyle}
      disabled={disabled}
      disabledStyle={disabledStyle}
      disabledTitleStyle={disabledTitleStyle}
      icon={icon}
      color={color}
      iconContainerStyle={iconContainerStyle}
      iconRight={iconRight}
      iconPosition={iconPosition}
      linearGradientProps={linearGradientProps}
      loading={loading}
      loadingProps={loadingProps}
      loadingStyle={loadingStyle}
      onPress={onPress}
      raised={raised}
      title={title}
      titleProps={titleProps}
      titleStyle={titleStyle}
      TouchableComponent={TouchableComponent}
      type={type}
      ViewComponent={ViewComponent}
    />
  );
};
