import { describe, expect, test } from "vitest";
import { fs } from "fs";
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const ruta_este_fichero = fileURLToPath(import.meta.url);
const ruta_fichero_destino = dirname(ruta_este_fichero);

