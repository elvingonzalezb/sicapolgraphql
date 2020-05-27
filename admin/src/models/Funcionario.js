import { Schema, model } from 'mongoose';

const funcionarioSchema = new Schema({
    CEDULA: {
        type: String,
        maxlength :20, 
        required: true
    },
    APELLIDOS: {
        type: String,
        maxlength :80, 
        required: true
    },
    NOMBRES: {
        type: String,
        maxlength :80, 
        required: true
    },
    DES_JER: {
        type: String,
        maxlength :30, 
        required: true
    },
    CARGO: {
        type: String,
        maxlength :40, 
        required: true
    },
    NOM_REGION: {
        type: String,
        maxlength :50, 
        required: true
    },
    NOM_COMISA: {
        type: String,
        maxlength :50, 
        required: true
    },
    DES_STATUS: {
        type: String,
        maxlength :20, 
        required: true
    },  
    TIP_TRAB: {
        type: String,
        maxlength :20, 
        required: true
    },
})

export default model('Funcionario', funcionarioSchema);