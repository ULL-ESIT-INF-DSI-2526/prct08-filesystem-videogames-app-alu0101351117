import { existsSync } from "fs";
import { VideojuegoSinUsuario } from "./argumentos.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Función que añade videojuegos a la lista del usuario, 
 * comprobando si el id coincide antes de agregarlo y si ya tenía elementos en su lista
 * @param usuario - Nombre del usuario
 * @param datos - Datos del videojuego sin el usuario
 */
export function añadirVideojuego(usuario: string, datos: VideojuegoSinUsuario){
  const ruta = path.join(__dirname, '../usuarios', `${usuario}.json`);

  if (existsSync(ruta)){
    // Guardo el contenido del json
    const contenido = fs.readFileSync(ruta, 'utf-8');
    // Separo el contenido para leerlo comodamente 
    const videojuegos: VideojuegoSinUsuario[] = JSON.parse(contenido);

    // Compruebo si el ID existe, si no devuelve undefined
    const id_existente = videojuegos.find(videojuego => videojuego.id === datos.id);
    // Si no existe, el videojuego es nuevo, se agrega
    if(id_existente === undefined){
      videojuegos.push(datos);
      fs.writeFileSync(ruta, JSON.stringify(videojuegos, null, 2));
      console.log(`Nuevo videojuego añadido a la colección del usuario ${usuario}`);
    } else console.error(`El videojuego ya existe en la colección del usuario ${usuario}`);
  }
  else {
    fs.writeFileSync(ruta, JSON.stringify([datos], null, 2));
    console.log(`Nuevo videojuego añadido a la colección del usuario ${usuario}`);
  }
}