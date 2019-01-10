import axios from 'axios';
import {
	EMPEZAR,
	EXITOSO,
	ERROR,
	FORMA_EXITOSA,
	PRIMER_GET,
	COMENTARIO_EDITAR
} from '../types/comentariosTypes';

export const traerComentarios = () => async (dispatch) =>
{
	dispatch({ type: EMPEZAR });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
		response.data.reverse();
		dispatch({ type: EXITOSO, payload: response.data });
		dispatch({ type: PRIMER_GET });
	}
	catch (err) {
		dispatch({ type: ERROR, payload: err.message });
	}
};

export const cambiarInput = (type, valor) => async (dispatch) => {
	dispatch({ type, payload: valor });
};

export const enviarForma = (valores, comentarios) => async (dispatch) => {
	dispatch({ type: EMPEZAR });

	try {
		const response = await axios.post('https://jsonplaceholder.typicode.com/comments', valores);

		comentarios.unshift(response.data);

		dispatch({ type: EXITOSO, payload: comentarios });

		window.Materialize.toast('Comentario guardado exitosamente.', 5 * 1000);

		dispatch({ type: FORMA_EXITOSA });
	}
	catch(error) {
		console.log('error: ', error);
		dispatch({ type: ERROR, payload: error.message });
		window.Materialize.toast('Intente más tarde.', 5 * 1000, 'red');
	}
};

export const llamarEditado = (id) => async (dispatch) => {
	// Falta poner el preloader y el try catch, hagnlo
	const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
	dispatch({ type: COMENTARIO_EDITAR, payload: response.data });
};

export const cambiarEditado = (editado) => async (dispatch) => {
	dispatch({ type: COMENTARIO_EDITAR, payload: editado });
};