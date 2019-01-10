import { combineReducers } from 'redux';
import comentariosReducer from './comentariosReducer';
import usuariosReducer from './usuariosReducer';

export default combineReducers({
	comentariosReducer,
	usuariosReducer
});