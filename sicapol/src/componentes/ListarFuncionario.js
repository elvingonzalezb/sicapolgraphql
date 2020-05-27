import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const queryFuncionarios = gql `
    {
        funcionarios {
            _id
            CEDULA,
            APELLIDOS,
            NOMBRES,
            DES_JER,
            CARGO,
            NOM_REGION,
            NOM_COMISA,
            DES_STATUS,       
            TIP_TRAB
        }
    }
`;

const ListarFuncionario = () => {
    const { loading, error, data } = useQuery(queryFuncionarios)
    if (loading) 
        return <div className="alert alert-primary" role="alert">
                Cargando...
                </div>
    if (error) 
        return <div className="alert alert-danger" role="alert">
                Error al Cargar Funcionarios
                </div>

    console.log(data);
    return <table className="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">CEDULA</th>
            <th scope="col">APELLIDOS</th>
            <th scope="col">NOMBRES</th>
            <th scope="col">JERARQUIA</th>
            <th scope="col">CARGO</th>
            <th scope="col">COMISARIA</th>
            <th scope="col">OPCIONES</th>
        </tr>
    </thead>
    <tbody>
    {
        data.funcionarios.map(({_id, CEDULA, APELLIDOS, NOMBRES, DES_JER, CARGO, NOM_COMISA}) => (
            <tr key={_id}>
                <th scope="row">1</th>
                <td>{CEDULA}</td>
                <td>{APELLIDOS}</td>
                <td>{NOMBRES}</td>
                <td>{DES_JER}</td>
                <td>{CARGO}</td>
                <td>{NOM_COMISA}</td>
                <td>
                    <button className="btn btn-success"> Editar</button>
                    
                    <button className="btn btn-danger"> Eliminar</button>
                </td>
            </tr>
        ))
    }
    </tbody>
</table>
    
}

export default ListarFuncionario;