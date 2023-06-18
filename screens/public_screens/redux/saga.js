import {all, call, put, takeLatest} from 'redux-saga/effects';
import {contactFormData, getProgramData} from '../../../services/apis';
import {CONTACT_FORM_REQUEST, WEEK_PROGRAM_DATA_REQUEST} from './constants';
import { requestCommonErrorResponse, requestCommonSuccessResponse, requestNowDataSuccess, requestWeekDataSuccess } from './actions';

function* getWeekDataAPi({params, loading}) {
  if(loading){
    loading(true);
  }
  try {
    const response = yield call(getProgramData, params);
    if (response?.status) {
      if(loading){
        loading(false);
      }
      yield put(requestWeekDataSuccess(response?.data));
      yield put(requestNowDataSuccess(response?.data?.now));
    } 
  } catch (e) {
  }
}
function* contactFormDataAPi({data}) {

  try {
    const response = yield call(contactFormData, data);
   
    if (response?.data?.status) {
      yield put(requestCommonSuccessResponse(response?.data?.message));
    }else{
       yield put(requestCommonErrorResponse(response?.data?.message));
    }
  } catch (e) {
  }
}

export default all([
  takeLatest(WEEK_PROGRAM_DATA_REQUEST, getWeekDataAPi),
  takeLatest(CONTACT_FORM_REQUEST, contactFormDataAPi),
]);
