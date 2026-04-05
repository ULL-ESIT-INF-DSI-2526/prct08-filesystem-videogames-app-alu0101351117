import yargs from 'yargs';
import { argumentos } from './argumentos.js';
import { hideBin } from 'yargs/helpers';
import { añadirVideojuego } from './archivos.js';
export const argv = yargs(hideBin(process.argv))
    .command('add', 'Añade un videojuego', (yargs) => yargs.options(argumentos), (argv) => {
    añadirVideojuego(argv);
})
    .command('modify', 'Modifica un videojuego existente', (yargs) => yargs.options(argumentos), (argv) => {
    console.log('Modificando videojuego:', argv);
})
    .command('delete', 'Elmina un videojuego existente de la lista', (yargs) => yargs.options({
    user: {
        description: 'Usuario que registra el videojuego',
        type: 'string',
        demandOption: true
    },
    id: {
        description: 'Id único del videojuego',
        type: 'number',
        demandOption: true
    }
}), (argv) => {
    console.log('Eliminando videojuego:', argv);
})
    .help()
    .argv;
