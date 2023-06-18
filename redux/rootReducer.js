import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// reducers
import public_reducer from '../screens/public_screens/redux/reducer';
const appPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
  timeout: null,
};

export default {
  public_reducer
};
