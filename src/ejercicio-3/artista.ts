import { Disco } from "./disco";
import { Discografia } from "./discografia";
import { Single } from "./single";

/**
 * Clase para albergar a los artistas
 * Los atributos de la clase son:
 * nombre_: de tipo string, nombre del artista
 * numero_oyentes_mensuales : de tipo number, el número total de oyentes mensuales del artista
 * discografia_ : alberga la discografía del artista, es un objeto de la clase 'Discografía'
 */
export class Artista <T extends Single | Disco> {
  private nombre_: string;
  private numero_oyentes_mensuales_: number;
  private discografia_: Discografia<T>;

  /**
   * Constructor de la clase Artista
   * @param nombre_artista nombre del artista
   * @param oyentes número de oyentes mensuales del artista
   * @param discografia_entrada la discografía del artista
   */
  constructor(
    nombre_artista: string,
    oyentes: number,
    discografia_entrada: Discografia<T>
  ) {
    this.nombre_ = nombre_artista;
    this.numero_oyentes_mensuales_ = oyentes;
    this.discografia_ = discografia_entrada;
  }

  /**
   * Getter nombre
   * @return string : el nombre del artista
   */
  get nombre(): string {
    return this.nombre_;
  }

  /**
   * Getter numero_oyentes_mensuales
   * @return number : el numero de oyentes mensuales
   */
  get numero_oyentes_mensuales(): number {
    return this.numero_oyentes_mensuales_;
  }

  /**
   * Getter discografia
   * @return Discografia : la discografia del artista
   */
  get discografia(): Discografia<T> {
    return this.discografia_;
  }

}
