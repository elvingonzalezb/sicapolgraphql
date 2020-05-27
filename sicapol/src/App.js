import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListarFuncionario from './componentes/ListarFuncionario';
import RegistrarFuncionario from './componentes/RegistrarFuncionario';

import Navbar from './componentes/Navbar';

import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={ListarFuncionario} />
          <Route exact path="/registrar-funcionario" component={RegistrarFuncionario} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
