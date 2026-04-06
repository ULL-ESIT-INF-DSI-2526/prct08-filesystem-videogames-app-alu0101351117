import { existsSync } from "fs";
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

export function organizar(ruta_directorio: string){
  if(!existsSync(ruta_directorio)) console.error(chalk.red(`No existe la ruta ${ruta_directorio}`));
  else {
    fs.readdirSync(ruta_directorio).forEach(fichero => {
      let extension = path.extname(fichero);
      extension = extension.replace(".", "");

      const carpeta = path.join(ruta_directorio, extension);
      const origen = path.join(ruta_directorio, fichero);
      const destino = path.join(carpeta, fichero);
      
      if(!existsSync(carpeta)) fs.mkdirSync(carpeta);
      fs.copyFileSync(origen, destino);
      fs.rmSync(origen);
    }) 
    console.log(chalk.green("Directorio ordenado"));
  }
}