export declare const argumentos: {
    user: {
        description: string;
        type: "string";
        demandOption: boolean;
    };
    id: {
        description: string;
        type: "number";
        demandOption: boolean;
    };
    desc: {
        description: string;
        type: "string";
        demandOption: boolean;
    };
    plataforma: {
        description: string;
        type: "string";
        demandOption: boolean;
    };
    genero: {
        description: string;
        type: "string";
        demandOption: boolean;
    };
    developer: {
        description: string;
        type: "string";
        demandOption: boolean;
    };
    año: {
        description: string;
        type: "number";
        demandOption: boolean;
    };
    multi: {
        description: string;
        type: "boolean";
        demandOption: boolean;
    };
    horas: {
        description: string;
        type: "number";
        demandOption: boolean;
    };
    coste: {
        description: string;
        type: "number";
        demandOption: boolean;
    };
};
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
export type VideojuegoInput = Record<string, unknown>;
