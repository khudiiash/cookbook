import { combineReducers } from 'redux';

import {createReducer} from './Create/reducers';
import {editReducer} from './Edit/reducers';

export default combineReducers({
    create: createReducer,
    edit: editReducer
})