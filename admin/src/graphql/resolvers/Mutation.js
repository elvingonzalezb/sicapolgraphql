import Funcionario from '../../models/Funcionario';

const Mutation = { 

    registrarFuncionario: async (_, {
        CEDULA,
        APELLIDOS,
        NOMBRES,
        DES_JER,
        CARGO,
        NOM_REGION,
        NOM_COMISA,
        DES_STATUS,       
        TIP_TRAB
    }) => {
        const newFuncionario = new Funcionario({
            CEDULA,
            APELLIDOS,
            NOMBRES,
            DES_JER,
            CARGO,
            NOM_REGION,
            NOM_COMISA,
            DES_STATUS,       
            TIP_TRAB
        });
        return await newFuncionario.save();
    },
    eliminarFuncionario: async (_, { _id}) => {
        return await Funcionario.findByIdAndDelete(_id);
    },
    actualizarFuncionario: async (_, { _id,
        CEDULA,
        APELLIDOS,
        NOMBRES,
        DES_JER,
        CARGO,
        NOM_REGION,
        NOM_COMISA,
        DES_STATUS,       
        TIP_TRAB
    }) => {
        return await Funcionario.findByIdAndUpdate(_id, {
            CEDULA,
            APELLIDOS,
            NOMBRES,
            DES_JER,
            CARGO,
            NOM_REGION,
            NOM_COMISA,
            DES_STATUS,       
            TIP_TRAB
        }, { new: true});
    }

};

export default Mutation;
