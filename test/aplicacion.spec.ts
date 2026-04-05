import {describe, expect, test, beforeEach, afterEach} from "vitest"
import { añadirVideojuego } from "../src/aplicacion/añadir_archivos.js"
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rutaTest = path.join(__dirname, '../src/usuarios/test_user.json');

describe("Prueba Videojuegos: ", ()=>{
    
    beforeEach(() => {
        // Limpiar el archivo de prueba antes de cada test
        if (fs.existsSync(rutaTest)) {
            fs.unlinkSync(rutaTest);
        }
    });

    afterEach(() => {
        // Limpiar después de cada test
        if (fs.existsSync(rutaTest)) {
            fs.unlinkSync(rutaTest);
        }
    });

    test("Debería crear un archivo para un nuevo usuario con un videojuego", ()=>{
        const usuario = 'test_user';
        const datos = {
            id: 1,
            desc: 'Juego de prueba',
            plataforma: 'PC',
            genero: 'Aventura',
            developer: 'Test Dev',
            año: 2024,
            multi: false,
            horas: 10,
            coste: 20
        };

        añadirVideojuego(usuario, datos);

        expect(fs.existsSync(rutaTest)).toBe(true);
        const contenido = fs.readFileSync(rutaTest, 'utf-8');
        const videojuegos = JSON.parse(contenido);
        expect(videojuegos).toHaveLength(1);
        expect(videojuegos[0].id).toBe(1);
    });

    test("Debería agregar un nuevo videojuego a una colección existente", ()=>{
        const usuario = 'test_user';
        const datos1 = {
            id: 1,
            desc: 'Primer juego',
            plataforma: 'PC',
            genero: 'Aventura',
            developer: 'Test Dev',
            año: 2024,
            multi: false,
            horas: 10,
            coste: 20
        };

        const datos2 = {
            id: 2,
            desc: 'Segundo juego',
            plataforma: 'PlayStation',
            genero: 'Acción',
            developer: 'Test Dev',
            año: 2025,
            multi: true,
            horas: 20,
            coste: 30
        };

        añadirVideojuego(usuario, datos1);
        añadirVideojuego(usuario, datos2);

        const contenido = fs.readFileSync(rutaTest, 'utf-8');
        const videojuegos = JSON.parse(contenido);
        expect(videojuegos).toHaveLength(2);
        expect(videojuegos[0].id).toBe(1);
        expect(videojuegos[1].id).toBe(2);
    });

    test("Debería evitar agregar un videojuego con ID duplicado", ()=>{
        const usuario = 'test_user';
        const datos = {
            id: 1,
            desc: 'Juego de prueba',
            plataforma: 'PC',
            genero: 'Aventura',
            developer: 'Test Dev',
            año: 2024,
            multi: false,
            horas: 10,
            coste: 20
        };

        añadirVideojuego(usuario, datos);
        const contenidoAntes = fs.readFileSync(rutaTest, 'utf-8');
        const videojuegosAntes = JSON.parse(contenidoAntes);

        // Intentar agregar el mismo ID
        añadirVideojuego(usuario, datos);

        const contenidoDespues = fs.readFileSync(rutaTest, 'utf-8');
        const videojuegosDespues = JSON.parse(contenidoDespues);

        expect(videojuegosDespues).toHaveLength(videojuegosAntes.length);
    });
});