import { fecha } from "./Serie";

/**
 * Interfaz 'Documental'
 * @param titulo_ de la documental
 * @param fecha_ de la documental
 * @param sinopsis_ de la documental
 * @param tematica_ de la documental
 * @param plataforma_ de la documental
 * @param duracion_ de la documental
 */
export interface Documental {
  titulo_: string;
  fecha_: fecha;
  sinopsis_: string;
  tematica_: string;
  plataforma_: string;
  duracion_: number;
}
