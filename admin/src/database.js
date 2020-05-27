import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/SICAPOL', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log('Conectado a la BD en el puerto 27017'))
    .catch(err => console.log('Error al conectar'));