import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table ,Preloader, Button, Icon } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';

class Comentarios extends Component {

	componentDidMount() {
		if (!this.props.primer_get) {
			this.props.traerComentarios();
		}
	}

	desplegarComentarios = () => (
		<Table hoverable={true}>
			<thead>
				<tr>
					<th>Correo</th>
					<th>Título</th>
					<th>Comentario</th>
				</tr>
			</thead>

			<tbody>
				{
					this.props.comentarios.map((elem, index) => (
						<tr key={ elem.email }>
							<td>{ elem.email }</td>
							<td>{ elem.name }</td>
							<td>{ elem.body }</td>
							<td>
								<Link to={`/comentarios/editar/${elem.id}`}>
									<Icon>edit</Icon>
								</Link>
							</td>
						</tr>
					))
				}
			</tbody>
		</Table>
	);

	desplegarError = () => (
		<h3 className="red-text">
			{ this.props.error }
		</h3>
	);

	desplegarCargando = () => (
		<div className="center">
			<Preloader size='big'/>
		</div>
	);

	desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarComentarios() );

	pendiente = () => {
		if (!this.props.nombre && !this.props.correo && !this.props.comentario) {
			return;
		}

		return (
			<div className="row">
				<div className="col s12">
					<h5>
						Pendiente de agregar:
					</h5>
					{
						(this.props.nombre) ? this.ponerCampo('Nombre', this.props.nombre) : ''
					}
					{
						(this.props.correo) ? this.ponerCampo('Correo', this.props.correo) : ''
					}
					{
						(this.props.comentario) ? this.ponerCampo('Comentario', this.props.comentario) : ''
					}
				</div>
			</div>
		);
	};

	ponerCampo = (titulo, valor) => (
		<p>
			<b>{ titulo }:</b> { valor }
		</p>
	);
	
	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Comentarios
					&nbsp;
					<Link to='/comentarios/agregar'>
						<Button floating large className='blue' waves='light' icon='add' />
					</Link>
				</h3>
				{ this.pendiente() }
				{
					(this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
				}
			</div>
		);
	}
}

const mapStateToProps = ({ comentariosReducer }) =>
{
	// comentariosReducer = { comentarios, cargando, error }
	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
	return comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(Comentarios);
