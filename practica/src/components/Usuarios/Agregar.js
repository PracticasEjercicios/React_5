import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';

class Agregar extends Component {

	fghjkjhgfghj = (event) => {
		this.props.cambioNombre(event.target.value);
	};

	render() {
		return (
			<div>
				<div className="row">
					<Input s={12} m={6} label="Nombre Completo" type='text' onChange={this.fghjkjhgfghj} />
					<Input s={12} m={6} label="Username" type='text' />
					<Input s={12} m={6} label="Correo" type='email' />
					<Input s={12} m={6} label="Teléfono" type='number' />
				</div>
				<div className="row">
					<div className="col s6 offset-s3 m4 offset-m4">
						<Button style={{width: '100%'}} waves='light'>Guardar</Button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer }) => {
	// usuariosReducer = { usuarios, cargando, error }
	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Agregar);
