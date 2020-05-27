import React from 'react';
import {Link} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">SICAPOL</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">               
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Funcionario
                </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/">Consultar</Link>
                        <Link className="dropdown-item" to="/registrar-funcionario">Registrar</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actas
                </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="#">Listar</Link>
                        <Link className="dropdown-item" to="#">Registrar</Link>
                    </div>
                </li>          
            </ul>      
        </div>
    </nav>
)

export default Navbar;