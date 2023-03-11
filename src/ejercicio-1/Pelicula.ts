import { fecha } from "./Serie";
/**
 * Interfaz 'Pelicula' 
 * @param titulo_ de la película
 * @param fecha_ de la película
 * @param sinopsis_ de la película
 * @param tematica_ de la película
 * @param plataforma_ de la película
 * @param reparto_ de la película
 * @param duracion_ de la película
 */
export interface Pelicula {
    titulo_ : string;
    fecha_ : fecha;
    sinopsis_ :string;
    tematica_ : string;
    plataforma_: string;
    duracion_ : number;
    reparto_ : string[];
}