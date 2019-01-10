import {
	EMPEZAR,
	EXITOSO,
	ERROR,
	UPDATE_NOMBRE,
	UPDATE_CORREO,
	UPDATE_COMENTARIO,
	FORMA_EXITOSA,
	PRIMER_GET,
	COMENTARIO_EDITAR
} from '../types/comentariosTypes';

const INITIAL_STATE = {
	comentarios: [],
	cargando: false,
	error: '',
	nombre: '',
	correo: '',
	comentario: '',
	primer_get: false,
	comentario_editar: {}
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case EMPEZAR: return { ...state, cargando: true, error: '' };
		case EXITOSO: return { ...state, comentarios: action.payload, cargando: false, error: '' };
		case ERROR: return { ...state, error: action.payload, cargando: false };
		case UPDATE_NOMBRE: return { ...state, nombre: action.payload };
		case UPDATE_CORREO: return { ...state, correo: action.payload };
		case UPDATE_COMENTARIO: return { ...state, comentario: action.payload };
		case FORMA_EXITOSA: return {
			...state,
			cargando: false,
			error: '',
			nombre: '',
			correo: '',
			comentario: ''
		};
		case PRIMER_GET: return { ...state, primer_get: true };
		case COMENTARIO_EDITAR: return { ...state, comentario_editar: action.payload };
		default: return state;
	}
}