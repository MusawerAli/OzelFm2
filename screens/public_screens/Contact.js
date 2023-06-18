import React, {useMemo, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {
  TextInputComponent,
  ButtonComponent,
  AlertComponent,
} from '../../components/CommonComponents';
import useForm from '../../Utils/useForm';
import {
  requestCommonErrorResponse,
  requestCommonSuccessResponse,
  requestContactForm,
} from './redux/actions';
import {connect} from 'react-redux';
export const Contact = ({
  requestContactForm,
  request_common_error_response,
  request_common_success_response,
  requestCommonSuccessResponse,
  requestCommonErrorResponse,
  loading
}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  //schemas
  const stateSchema = {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    program: {
      value: '',
      error: '',
    },
    message: {
      value: '',
      error: '',
    },
  };

  const validationStateSchema = {
    name: {
      required: true,
    },
    email: {
      required: true,
    },
    program: {
      required: false,
    },
    message: {
      required: true,
    },
  };

  const {state, handleOnChange, disable, setState} = useForm(
    stateSchema,
    validationStateSchema,
  );

  const handleSubmitAction = () => {
    const form_data = {
      message: state.message.value,
      name: state.name.value,
      email: state.email.value,
      program: state.name.value,
    };
    requestContactForm(form_data);
  };

  useEffect(() => {
    if (Boolean(request_common_error_response)) {
      Alert.alert(
        "Hata",
        request_common_error_response,
        [
          {
            text: 'Tamam',
            onPress: () => requestCommonErrorResponse(false),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: requestCommonErrorResponse(false),
        },
      );
    };
      setTimeout(() => {
        requestCommonErrorResponse(false);
      }, 4000);
    }, [request_common_error_response]);

  useEffect(() => {
    if (Boolean(request_common_success_response)) {

      Alert.alert(
        "Başarı",
        request_common_success_response,
        [
          {
            text: 'Tamam',
            onPress: () => requestCommonSuccessResponse(false),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: requestCommonSuccessResponse(false),
        },
      );

      setTimeout(() => {
        requestCommonSuccessResponse(false);
      }, 4000);
    }
  }, [request_common_success_response]);

  return (
    <ScrollView>
      {/* {Boolean(request_common_success_response) && (
        <AlertComponent
          title={'Başarı'}
          msg={request_common_success_response}
          cancelable={true}
          onDismiss={() => requestCommonSuccessResponse(false)}
        />
      )}

      {Boolean(request_common_error_response) && (
        <AlertComponent
          title={'Hata'}
          msg={request_common_error_response}
          cancelable={true}
          onDismiss={() => requestCommonErrorResponse(false)}
        />
      )} */}

      <View style={styles.main}>
        <Text style={styles.heading}>Özel Fm İstek</Text>

        <View style={styles.container}>
          <TextInputComponent
            placeholder="Adınız Soyadınız"
            style={styles.containerStyle}
            // keyboardType={'text'}
            onChangeText={event => [handleOnChange('name', event)]}
          />

          <TextInputComponent
            placeholder="Eposta Adresiniz"
            style={styles.containerStyle}
            // keyboardType={'text'}
            inputMode="email"
            onChangeText={event => [handleOnChange('email', event)]}
          />

          <TextInputComponent
            placeholder="Mesajınız"
            style={styles.containerStyle}
            multiline={true}
            numberOfLines={6}
            // keyboardType={'text'}
            onChangeText={event => [handleOnChange('message', event)]}
          />
          <View style={styles.btn_container}>
            <ButtonComponent
              onPress={() => handleSubmitAction()}
              disabled={disable||loading}
              type="solid"
              title="Gönder"
              buttonStyle={styles.btn}
              containerStyle={{
                borderColor: 15,
                marginTop: 50,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    // <DropDownPicker
    //         open={open}
    //         value={value}
    //         items={items}
    //         setOpen={setOpen}
    //         setValue={setValue}
    //         setItems={setItems}
    //       />
  );
};

const makeStyles = colors =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      paddingLeft: 25,
      paddingTop: 20,
    },
    container: {
      //   marginTop: 30,
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
    containerStyle: {
      backgroundColor: colors.inputBg,
      color: colors.inputColor,
      borderRadius: 15,
      width: '90%',
      marginTop: 20,
      // placeholderTextColor: colors.inputColor,
    },
    btn_container: {
      display: 'flex',
      flexDirection: 'row',
      // marginBottom:50,
      // alignItems:'center'
    },
    btn: {
      height: 50,
      width: 350,
      borderRadius: 15,
      fontFamily: 'Montserrat',
      fontWeight: '600',
      lineHeight: 22,
      // color:'#FFFFFF',
      backgroundColor: colors.primary,
    },
  });

const mapStateToProps = state => ({
  loading: state.public_reducer.loading,
  request_common_error_response:
    state.public_reducer.request_common_error_response,
  request_common_success_response:
    state.public_reducer.request_common_success_response,
});

const mapDispatchToProps = dispatch => ({
  requestContactForm: data => dispatch(requestContactForm(data)),
  requestCommonErrorResponse: data =>
    dispatch(requestCommonErrorResponse(data)),
  requestCommonSuccessResponse: data =>
    dispatch(requestCommonSuccessResponse(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
