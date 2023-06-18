import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  REQUEST_COMMON_ERROR_RESPONSE,
  REQUEST_COMMON_SUCCESS_RESPONSE,
  SET_LANG,
  REQUEST_FALSE,
  WEEK_PROGRAM_DATA_SUCCESS,
  WEEK_PROGRAM_DATA_ERROR,
  NOW_PROGRAM_DATA_SUCCESS,
  NOW_PROGRAM_DATA_ERROR,
  SET_PLAY,
  SET_CONNECTION,
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
} from './constants';
const initialState = {
  request_common_success_response: false,
  request_common_error_response: false,
  defaultLang: 'en',
  weekData: false,
  weekDataError: false,
  nowData: false,
  nowDataError: false,
  playing: false,
  loading: false,
  connection: {isConnected:false,isInternetReachable:false},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COMMON_ERROR_RESPONSE:
      return {...state, request_common_error_response: action.data,loading:false};

    case REQUEST_COMMON_SUCCESS_RESPONSE:
      return {...state, request_common_success_response: action.data,loading:false};

    case SET_LANG:
      return {
        ...state,
        defaultLang: action.data,
      };

    case SET_PLAY:
      return {
        ...state,
        playing: action.data,
      };  
    case SET_CONNECTION:
      return {
        ...state,
        connection: action.data,
      }; 
      case WEEK_PROGRAM_DATA_SUCCESS:
      return {
        ...state,
        weekData: action.data,
      };
    case WEEK_PROGRAM_DATA_ERROR:
      return {
        ...state,
        weekDataError: action.data,
      };

      case NOW_PROGRAM_DATA_SUCCESS:
        return {
          ...state,
          nowData: action.data,
        };
      case NOW_PROGRAM_DATA_ERROR:
        return {
          ...state,
          nowDataError: action.data,
        };

      case CONTACT_FORM_REQUEST:
        return {
          ...state,
          loading: true,
        };
        case CONTACT_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
        };        

    default:
      return state;
  }
};
