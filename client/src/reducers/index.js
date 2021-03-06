import {combineReducers} from 'redux';
import GoogleAuthReducer from './GoogleAuthReducer';
import {reducer as formReducer} from 'redux-form';
import streamsReducer from './StreamsReducer';

const rootReducer = combineReducers({
    auth:  GoogleAuthReducer,
    form: formReducer,
    streams: streamsReducer
})

export default rootReducer;