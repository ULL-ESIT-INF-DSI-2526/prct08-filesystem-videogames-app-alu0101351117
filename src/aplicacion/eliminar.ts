import { existsSync } from "fs";
import { VideojuegoSinUsuario } from "./argumentos.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export function eliminarVideojuego(usuario: string, id: number){
  const ruta = path.join(__dirname, '../usuarios', `${usuario}.json`);
  if(!existsSync(ruta)) {
    console.error(chalk.red(`Colección no existente`))
  } else {
    // Guardo el contenido del json
    const contenido = fs.readFileSync(ruta, 'utf-8');
    // Separo el contenido para leerlo comodamente 
    const videojuegos: VideojuegoSinUsuario[] = JSON.parse(contenido);
    const id_existente = videojuegos.find(videojuego => videojuego.id === id);
    if(id_existente === undefined){
      console.log(chalk.red(`Videojuego no encontrado en la colección del usuario ${usuario}`));
    } else {
      // Filtro para eliminar el videojuego con ese id
      const videojuegosActualizados = videojuegos.filter(videojuego => videojuego.id !== id);
      // Guardo el contenido actualizado en el archivo
      fs.writeFileSync(ruta, JSON.stringify(videojuegosActualizados, null, 2));
      console.log(chalk.green(`Videojuego eliminado de la colección del usuario ${usuario}`));
    }
  }
}