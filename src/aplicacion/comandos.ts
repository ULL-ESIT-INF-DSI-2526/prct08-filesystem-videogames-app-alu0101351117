import yargs from 'yargs';
import { argumentos } from './argumentos.js';
import { hideBin } from 'yargs/helpers';
import { añadirVideojuego } from './añadir_archivos.js';

export const argv = yargs(hideBin(process.argv))
  .command(
    'add',
    'Añade un videojuego',
    (yargs) => yargs.options(argumentos),
    (argv) => {
      // Filtrar solo los datos del videojuego, sin propiedades de yargs
      const datosLimpio = {
        id: argv.id,
        desc: argv.desc,
        plataforma: argv.plataforma,
        genero: argv.genero,
        developer: argv.developer,
        año: argv.año,
        multi: argv.multi,
        horas: argv.horas,
        coste: argv.coste
      };
      let usuario: string = argv.user;
      añadirVideojuego(usuario, datosLimpio);
    }
  )
  .command(
    'modify',
    'Modifica un videojuego existente',
    (yargs) => yargs.options(argumentos),
    (argv) => {
      console.log('Modificando videojuego:', argv);
    }
  )
  .command(
    'delete',
    'Elmina un videojuego existente de la lista',
    (yargs) =>
      yargs.options({
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
      }),
    (argv) => {
      console.log('Eliminando videojuego:', argv);
    }
  )
  .help()
  .argv;