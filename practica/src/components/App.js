import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Comentarios from './Comentarios';
import ComentariosAgregar from './Comentarios/Agregar';
import ComentariosEditar from './Comentarios/Editar';
import Usuarios from './Usuarios';
import UsuariosAgregar from './Usuarios/Agregar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <br />
            <div className="container">
              <Route exact path='/' component={Comentarios} />
              <Route exact path='/comentarios/agregar' component={ComentariosAgregar} />
              <Route exact path='/comentarios/editar/:id' component={ComentariosEditar} />
              <Route exact path='/usuarios' component={Usuarios} />
              <Route exact path='/usuarios/agregar' component={UsuariosAgregar} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
