import Funcionario from '../../models/Funcionario';

const Query = {
    
    funcionarios: async () => {
        return await Funcionario.find()        
    }
}

export default Query;