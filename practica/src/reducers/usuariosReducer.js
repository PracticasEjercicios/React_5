import { LLAMAR, EXITOSO, FALLO } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case LLAMAR: return { ...state, error: '', cargando: true };
		case EXITOSO: return { ...state, error: '', cargando: false, usuarios: action.payload };
		case FALLO: return { ...state, error: action.payload, cargando: false };
		case 'cambio_nombre': return { ...state, nombre: action.payload };
		default: return state;
	}
}