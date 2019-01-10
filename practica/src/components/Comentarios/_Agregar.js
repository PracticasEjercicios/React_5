import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Preloader } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';
import {
	UPDATE_NOMBRE,
	UPDATE_CORREO,
	UPDATE_COMENTARIO
} from '../../types/comentariosTypes';

const Agregar = (props) =>
{
	const handleChange = (event, type) => props.cambiarInput(type, event.target.value);

	const enviar = async () => {
		const {
			nombre: name,
			correo: email,
			comentario: body
		} = props;

		const valores = { name, email, body };

		props.enviarForma(valores, props.comentarios);
	};

	console.log(props.match.params.id);
	return (
		<div>
			<div className="row">
				<Input
					s={6}
					label="Nombre Completo"
					value={props.nombre}
					onChange={
						(event) => handleChange(event, UPDATE_NOMBRE)
					}
					name="nombre"
				/>
				<Input
					s={6} 
					label="Correo"
					type="email"
					value={props.correo}
					onChange={
						(event) => handleChange(event, UPDATE_CORREO)
					}
					name="correo"
				/>
			</div>
			<div className="row">
				<Input
					s={12}
					label="Comentario"
					type="textarea"
					value={props.comentario}
					onChange={
						(event) => handleChange(event, UPDATE_COMENTARIO)
					}
					name="comentario"
				/>
			</div>
			<div className="row">
				<div className="col s6 offset-s3 center">
					<Button
						style={{width: '100%'}}
						waves='light'
						onClick={enviar}
						disabled={props.cargando}
					>
						Enviar
					</Button>
					<br /><br />
					<Preloader active={props.cargando} size='big'/>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ comentariosReducer }) =>
{
	return comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(Agregar);