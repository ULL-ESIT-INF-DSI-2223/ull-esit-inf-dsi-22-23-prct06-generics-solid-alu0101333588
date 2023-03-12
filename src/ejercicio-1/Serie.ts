export type fecha = [number, string, number];

/**
 * Interfaz 'Serie'
 * @param titulo_ de la serie
 * @param fecha_ de la serie
 * @param sinopsis_ de la serie
 * @param tematica_ de la serie
 * @param plataforma_ de la serie
 * @param temporadas_ de la serie
 * @param capitulos_ de la serie
 * @param personajes_ de la serie
 */
export interface Serie {
  titulo_: string;
  fecha_: fecha;
  sinopsis_: string;
  tematica_: string;
  plataforma_: string;
  temporadas_: number;
  capitulos_: number;
  personajes_: string[];
}
