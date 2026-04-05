export const argumentos = {
  user: {
    description: 'Usuario que registra el videojuego',
    type: 'string',
    demandOption: true
  },
  id: {
    description: 'Id único del videojuego',
    type: 'number',
    demandOption: true
  },
  desc:{
    description: 'Descripción del videojuego',
    type: 'string',
    demandOption: true
  },
  plataforma: {
    description: 'Plataforma de lanzamiento del videojuego',
    type: 'string',
    demandOption: true
  },
  genero: {
    description: 'Género del videojuego',
    type: 'string',
    demandOption: true
  },
  developer: {
    description: 'Empresa desarrolladora del videojuego',
    type: 'string',
    demandOption: true
  },
  año: {
    description: 'Año de lanzamiento del videojuego',
    type: 'number',
    demandOption: true
  },
  multi: {
    description: 'Identifica si el videojuego tiene multijugador de manera nativa',
    type: 'boolean',
    demandOption: true
  },
  horas: {
    description: 'Duración aproximada del juego en horas',
    type: 'number',
    demandOption: true
  },
  coste: {
    description: 'Precio del videojuego',
    type: 'number',
    demandOption: true
  }
} as const satisfies Record<string, { description: string; type: string | 'boolean'; demandOption: boolean }>

export interface Videojuego {
  user: string;
  id: number;
  desc: string;
  plataforma: string;
  genero: string;
  developer: string;
  año: number;
  multi: boolean;
  horas: number;
  coste: number;
}

export type VideojuegoSinUsuario = Omit<Videojuego, 'user'>;

export interface ArgumentosVideojuego extends Videojuego {
  _: string[];
  $0: string;
  [key: string]: unknown;
}

export interface ArgumentosDelete {
  user: string;
  id: number;
  _: string[];
  $0: string;
  [key: string]: unknown;
}