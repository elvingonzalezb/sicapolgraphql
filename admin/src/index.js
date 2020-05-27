import { servGrap } from './server'
import './database'

servGrap.start({port: 4000}, (port) => {
    console.log('Servidor Grap en puerto:', port); 
})