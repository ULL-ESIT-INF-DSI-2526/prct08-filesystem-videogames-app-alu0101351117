import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { organizar } from "./organizar.js";
import { renombrar } from "./renombrar.js";
import { duplicados } from "./duplicados.js";

export const argv = yargs(hideBin(process.argv))
.command('org', 'Organiza los ficheros por extensión en subcarpetas', {
  ruta: {
    description: 'Ruta al directorio a organizar',
    type: 'string',
    demandOption: true,
  }
}, (argv) => {
  organizar(argv.ruta);
})
.command('renombrar', 'Añade prefijos o sufijos a los ficheros de un directorio', {
  ruta: {
    description: 'Ruta al directorio a organizar',
    type: 'string',
    demandOption: true,
  }, 
  tipo: {
    description: 'Prefijo o sufijo',
    type: 'string',
    demandOption: true,
  },
  texto: {
    description: 'Texto que se le añadirá a los archivos',
    type: 'string',
    demandOption: true
  }
}, (argv) => {
  renombrar(argv.ruta, argv.tipo, argv.texto);

})
.command('duplicados', 'Elimina duplicados de un directorio', {
  ruta: {
    description: 'Ruta al directorio a organizar',
    type: 'string',
    demandOption: true,
  }
}, (argv) => {
  duplicados(argv.ruta);

})
.help()
.argv;