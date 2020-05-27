import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const mutacionFuncionario = gql`
    mutation RegistrarFuncionario(
        $cedula: String,
        $apellidos: String,
        $nombres: String,
        $desJer: String, 
        $cargo: String,
        $nomRegion: String,
        $nomComisaria: String,
        $desStatus: String,
        $tipTrabajador: String        
    ) {
        registrarFuncionario(
            CEDULA: $cedula,
            APELLIDOS: $apellidos,
            NOMBRES: $nombres 
            DES_JER: $desJer, 
            CARGO: $cargo,
            NOM_REGION: $nomRegion,
            NOM_COMISA: $nomComisaria,
            DES_STATUS: $desStatus,       
            TIP_TRAB: $tipTrabajador
        ) {
        _id
    }
}
`;

const RegistrarFuncionario = () => {
    
    const [cedula, setCedula] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [desJer, setDesJer] = useState("");
    const [cargo, setCargo] = useState("");
    const [nomRegion, setNomRegion] = useState("");
    const [nomComisaria, setNomComisaria] = useState("");
    const [desStatus, setDesStatus] = useState("");
    const [tipTrabajador, setTipTrabajador] = useState("");
    

    const [registrarFuncionario] = useMutation(mutacionFuncionario);

    return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-body">
                    <form
                    onSubmit={async e => {
                        e.preventDefault();
                        await registrarFuncionario({ variables: 
                            {   cedula, 
                                apellidos, 
                                nombres, 
                                cargo, 
                                desJer, 
                                nomRegion, 
                                nomComisaria, 
                                desStatus, 
                                tipTrabajador 
                            } 
                        });
                        window.location.href = "/";
                    }}
                    >
                    <div className="form-group">
                        <input  
                            type="text"
                            placeholder="Cedula"
                            value={cedula}
                            onChange={e => setCedula(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Apellidos"
                            value={apellidos}
                            onChange={e => setApellidos(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombres"
                            value={nombres}
                            onChange={e => setNombres(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Cargo"
                            value={cargo}
                            onChange={e => setCargo(e.target.value)}
                            className="form-control"
                        />
                    </div>   
                
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Jerarquia"
                            value={desJer}
                            onChange={e => setDesJer(e.target.value)}
                            className="form-control"
                        />
                    </div>                

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre de Region"
                            value={nomRegion}
                            onChange={e => setNomRegion(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre de Comisaria"
                            value={nomComisaria}
                            onChange={e => setNomComisaria(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Estatus"
                            value={desStatus}
                            onChange={e => setDesStatus(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Tipo Trabajador"
                            value={tipTrabajador}
                            onChange={e => setTipTrabajador(e.target.value)}
                            className="form-control"
                        />
                    </div>

                        <button className="btn btn-primary btn-block">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default RegistrarFuncionario;