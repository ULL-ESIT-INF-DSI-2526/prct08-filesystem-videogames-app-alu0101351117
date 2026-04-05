import { existsSync } from "fs";
import { appendFile } from "fs";
import { writeFile } from "fs";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/**
 * Función que añade videojuegos a la lista del usuario,
 * comprobando si el id coincide antes de agregarlo y si ya tenía elementos en su lista
 * @param datos - Parametro con los datos recogidos por línea de comandos
 */
export function añadirVideojuego(datos) {
    const ruta = path.join(__dirname, '../usuarios', `${datos.user}.json`);
    console.log(ruta);
    if (existsSync(ruta)) {
        // Guardo el contenido del json
        const contenido = fs.readFileSync(ruta, 'utf-8');
        // Separo el contenido para leerlo comodamente 
        const videojuegos = JSON.parse(contenido);
        // Compruebo si el ID existe, si no devuelve undefined
        const id_existente = videojuegos.find(videojuego => videojuego.id === datos.id);
        // Si no existe, el videojuego es nuevo, se agrega
        if (id_existente === undefined) {
            appendFile(ruta, JSON.stringify(datos, null, 2), (err) => {
                if (err)
                    console.error('Se ha producido un error inesperado al introducir el nuevo videojuego');
                else
                    console.log(`Nuevo videojuego añadido a la colección del usuario ${datos.user}`);
            });
        }
        else
            console.error(`El videojuego ya existe en la colección del usuario ${datos.user}`);
    }
    else {
        writeFile(ruta, JSON.stringify([datos], null, 2), () => {
            console.log(`Nuevo videojuego añadido a la colección del usuario ${datos.user}`);
        });
    }
}
