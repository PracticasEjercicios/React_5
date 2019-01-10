import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleItem, Button, Preloader } from 'react-materialize';
import * as usuariosActions from '../../actions/usuariosActions';

class Usuarios extends Component {

	componentDidMount() {
		this.props.traerUsuarios();
	}

	desplegarUsuarios = () => (
		<Collapsible accordion>
			{
				this.props.usuarios.map((elem, index) => (
					<CollapsibleItem
						header={ `${elem.name} --- ${elem.email}` }
						key={ elem.email }
						icon='chevron_right'
					>
						<div className="row">
							<div className="col s6 center">
								<h5>Dirección</h5>
								<div>
									<b>Calle:</b> { elem.address.street }
								</div>
								<div>
									<b>Número:</b> { elem.address.suite }
								</div>
								<div>
									<b>Ciudad:</b> { elem.address.city }
								</div>
								<div>
									<b>CP:</b> { elem.address.zipcode }
								</div>
							</div>
							<div className="col s6 center">
								<h5>Compañia</h5>
								<div>{ elem.company.name }</div>
								<div>{ elem.company.catchPhrase }</div>
								<div>{ elem.company.bs }</div>
								<div>{ elem.phone }</div>
							</div>
						</div>
					</CollapsibleItem>
				))
			}
		</Collapsible>
	);

	desplegarError = () => (
		<h1 className="red-text">
			{ this.props.error }
		</h1>
	);

	desplegarCargando = () => (
		<div className="center">
			<Preloader size='big'/>
		</div>
	);

	desplegarContenido = () => ( (this.props.error) ? this.desplegarError() : this.desplegarUsuarios() );

	render() {
		return (
			<div>
				<h3 className="valign-wrapper">
					Usuarios
					&nbsp;
					<Link to='/usuarios/agregar'>
						<Button floating large className='blue' waves='light' icon='add' />
					</Link>
				</h3>
				{
					(this.props.cargando) ? this.desplegarCargando() : this.desplegarContenido()
				}
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer }) => {
	// usuariosReducer = { usuarios, cargando, error }
	// Como se quieren usar los 3 atributos, se manda tal cual el objeto
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
