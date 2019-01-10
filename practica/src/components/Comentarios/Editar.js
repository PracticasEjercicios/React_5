import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Preloader } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';

class Editar extends Component {

	componentDidMount() {
		this.props.llamarEditado(this.props.match.params.id);
	}

	handleChange = (event, propiedad) => {
		this.props.cambiarEditado({
			...this.props.comentario_editar,
			[propiedad]: event.target.value
		});
	};

	enviar = async () => {
		const {
			nombre: name,
			correo: email,
			comentario: body
		} = this.props;

		const valores = { name, email, body };

		this.props.enviarForma(valores, this.props.comentarios);
	};

	render() {
		return (
			<div>
				<div className="row">
					<Input
						s={6}
						label="Nombre Completo"
						value={this.props.comentario_editar.name}
						onChange={
							(event) => this.handleChange(event, 'name')
						}
						name="nombre"
					/>
					<Input
						s={6} 
						label="Correo"
						type="email"
						value={this.props.comentario_editar.email}
						onChange={
							(event) => this.handleChange(event, 'email')
						}
						name="correo"
					/>
				</div>
				<div className="row">
					<Input
						s={12}
						label="Comentario"
						type="textarea"
						value={this.props.comentario_editar.body}
						onChange={
							(event) => this.handleChange(event, 'body')
						}
						name="comentario"
					/>
				</div>
				<div className="row">
					<div className="col s6 offset-s3 center">
						<Button
							style={{width: '100%'}}
							waves='light'
							onClick={this.enviar}
							disabled={this.props.cargando}
						>
							Enviar
						</Button>
						<br /><br />
						<Preloader active={this.props.cargando} size='big'/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ comentariosReducer }) =>
{
	return comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(Editar);
