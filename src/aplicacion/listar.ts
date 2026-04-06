import { existsSync } from "fs";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from 'chalk';
import { VideojuegoSinUsuario } from "./argumentos.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function listarVideojuegos(usuario: string){
  const ruta = path.join(__dirname, '../usuarios', `${usuario}.json`);
  if (!existsSync(ruta)){
    console.log(chalk.red.bold(`Colección no existente`));
  } else {
    const contenido = fs.readFileSync(ruta, 'utf-8');
    const videojuegos: VideojuegoSinUsuario[] = JSON.parse(contenido);
    
    if (videojuegos.length === 0) {
      console.log(chalk.red(`La colección del usuario está vacía`));
    } else {
      console.log(chalk.green(`Videojuegos del usuario ${usuario}`))
      
      videojuegos.forEach((videojuego) => {
        console.log(chalk.white.bold(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`));
        console.log(chalk.white(`ID:`), chalk.white(`${videojuego.id}`));
        console.log(chalk.white(`Título:`, `${chalk.green(videojuego.desc)}`));
        console.log(chalk.white(`Plataforma: ${chalk.magenta(videojuego.plataforma)}`));
        console.log(chalk.white(`Género: ${chalk.cyan(videojuego.genero)}`));
        console.log(chalk.white(`Desarrollador: ${chalk.blue(videojuego.developer)}`));
        console.log(chalk.white(`Año: ${chalk.yellow(videojuego.año)}`));
        console.log(chalk.white(`Multijugador: ${videojuego.multi ? chalk.green('Sí') : chalk.red('No')}`));
        console.log(chalk.white(`Horas: ${chalk.magenta(videojuego.horas)} h`));
        if(videojuego.coste <= 100 && videojuego.coste >= 70) console.log(chalk.white("Coste de mercado: "), chalk.green(`${videojuego.coste}`));
        if(videojuego.coste <= 69 && videojuego.coste >=50) console.log(chalk.white("Coste de mercado: "), chalk.rgb(255, 136, 0)(`${videojuego.coste}`));
        if(videojuego.coste <= 49 && videojuego.coste >= 20) console.log(chalk.white("Coste de mercado: "), chalk.yellow(`${videojuego.coste}`));
        if(videojuego.coste <= 19 && videojuego.coste >= 0) console.log(chalk.white("Coste de mercado: "), chalk.red(`${videojuego.coste}`));
      });
      console.log(chalk.white(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`));
    }
  }
}