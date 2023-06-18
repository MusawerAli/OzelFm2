import {
  REQUEST_COMMON_ERROR_RESPONSE,
  REQUEST_COMMON_SUCCESS_RESPONSE,
  SET_LANG,
  NOW_PROGRAM_DATA_ERROR,
  NOW_PROGRAM_DATA_REQUEST,
  NOW_PROGRAM_DATA_SUCCESS,
  WEEK_PROGRAM_DATA_ERROR,
  WEEK_PROGRAM_DATA_REQUEST,
  WEEK_PROGRAM_DATA_SUCCESS,
  SET_PLAY,
  SET_CONNECTION,
  CONTACT_FORM_REQUEST,
  CONTACT_FORM_SUCCESS,
  CONTACT_FORM_ERROR,
} from './constants';

export const requestCommonErrorResponse = data => ({
  type: REQUEST_COMMON_ERROR_RESPONSE,
  data,
});
export const requestCommonSuccessResponse = data => ({
  type: REQUEST_COMMON_SUCCESS_RESPONSE,
  data,
});

export const setLang = data => ({
  type: SET_LANG,
  data,
});

export const setPlay = data => ({
  type: SET_PLAY,
  data,
});
export const setConnection = data => ({
  type: SET_CONNECTION,
  data,
});
export const requestWeekData = (params, loading) => ({
  type: WEEK_PROGRAM_DATA_REQUEST,
  params,
  loading,
});
export const requestWeekDataSuccess = data => ({
  type: WEEK_PROGRAM_DATA_SUCCESS,
  data,
});
export const requestWeekDataError = data => ({
  type: WEEK_PROGRAM_DATA_ERROR,
  data,
});

export const requestNowData = (params, loading) => ({
  type: NOW_PROGRAM_DATA_REQUEST,
  params,
  loading,
});
export const requestNowDataSuccess = data => ({
  type: NOW_PROGRAM_DATA_SUCCESS,
  data,
});
export const requestNowDataError = data => ({
  type: NOW_PROGRAM_DATA_ERROR,
  data,
});

export const requestContactForm = data => ({
  type: CONTACT_FORM_REQUEST,
  data,
});
export const requestContactFormSuccess = data => ({
  type: CONTACT_FORM_SUCCESS,
  data,
});
export const requestContactFormError = data => ({
  type: CONTACT_FORM_ERROR,
  data,
});