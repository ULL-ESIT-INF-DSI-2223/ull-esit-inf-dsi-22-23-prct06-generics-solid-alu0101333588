import { Disco } from "./disco";
import { Single } from "./single";

/**
 * Clase para crear Discografias de los artistas.
 * Los atributos de la clase son:
 * recursos_: conjunto de recursos
 */
export class Discografia <T extends Single | Disco> {
  private recursos_: T[];

  /**
   * Constructor de la clase Discografía.
   * @param recursos nombre del array de tipo 'Disco'
   */
  constructor(recursos: T[]) {
    this.recursos_ = recursos;
  }

  /**
   * Getter recursos
   * @return el conjunto de recursos
   */
  get recursos(): T[] {
    return this.recursos_;
  }

  /*
   * Obtener el número de canciones de un disco y, además, saber si existe o no
   * @param nombre nombre del disco
   * @return boolean en caso de que sea falso
   * @return number en caso de que exista el disco
   
  Canciones(nombre: string): number | boolean {
    for (let i: number = 0; i < this.NumeroDiscos(); i++) {
      if (this.recursos_[i].nombre === nombre) {
        return this.recursos_[i].numero_canciones();
      }
    }
    return false;
  }

  
   * Obtener el número de reproducciones de un disco y, además, saber si existe o no
   * @param nombre nombre del disco
   * @return boolean en caso de que sea falso
   * @return number en caso de que exista el disco
   
  ReproduccionesDisco(nombre: string): number | boolean {
    for (let i: number = 0; i < this.NumeroDiscos(); i++) {
      if (this.recursos_[i].nombre === nombre) {
        return this.recursos_[i].reproducciones_disco();
      }
    }
    return false;
  }

  
   * Obtener la duración total de un disco y, además, saber si existe o no
   * @param nombre nombre del disco
   * @return boolean en caso de que sea falso
   * @return number en caso de que exista el disco
   
  DuracionDisco(nombre: string): number | boolean {
    for (let i: number = 0; i < this.NumeroDiscos(); i++) {
      if (this.recursos_[i].nombre === nombre) {
        return this.recursos_[i].duracion_disco();
      }
    }
    return false;
  }

  
   * Obtener el número de recursos de una discografía
   * @return number
  
  NumeroDiscos(): number {
    return this.recursos_.length;
  }*/
}
