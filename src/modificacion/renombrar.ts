import { existsSync } from "fs";
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';


export function renombrar(ruta_directorio: string, tipo: string, texto: string){

  if(!existsSync(ruta_directorio)) console.error(chalk.red(`No existe la ruta ${ruta_directorio}`));
  else {
    fs.readdirSync(ruta_directorio).forEach(fichero => {
      
      const origen = path.join(ruta_directorio, fichero);
      let destino;
      if(tipo === "prefijo"){
        destino = path.join(ruta_directorio, texto + fichero);
      } else {
        const sufijo = path.basename(origen, path.extname(fichero));
        destino = path.join(ruta_directorio, sufijo + texto + path.extname(fichero));
      }
      
      fs.renameSync(origen, destino);
    }) 
    console.log(chalk.green("Directorio renombrado"));
  }
}