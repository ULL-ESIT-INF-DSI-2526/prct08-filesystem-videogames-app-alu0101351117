import { existsSync, stat, Stats } from "fs";
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { error } from "console";


export function duplicados(ruta_directorio: string){
  if(!existsSync(ruta_directorio)) console.error(chalk.red(`No existe la ruta ${ruta_directorio}`));
  else {

    let comp_duplicado: [string, number][] = [["", 0]];

    fs.readdirSync(ruta_directorio).forEach(fichero => {

      const origen = path.join(ruta_directorio, fichero);
      const nombre_archivo = path.basename(origen, path.extname(fichero));
      
      fs.stat(nombre_archivo, (error, stats) =>{
        if(error) {
          console.error(chalk.red("Error al acceder a los datos del archivo"));
        }

        comp_duplicado.find()


        // if(comp_duplicado.(nombre_archivo)){
        //   if(comp_duplicado.get(nombre_archivo) === stats.size) fs.rmSync(origen);
// 
        // } else {
        //   comp_duplicado.set(nombre_archivo, stats.size);
        // }

      })





    }) 
    console.log(chalk.green("Directorio renombrado"));
  }
}
