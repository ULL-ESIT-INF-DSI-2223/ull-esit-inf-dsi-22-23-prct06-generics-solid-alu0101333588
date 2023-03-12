import { Cancion } from "./cancion";

/**
 * Clase que alberga los discos de los artistas.
 * Los atributos de la clase son:
 * nombre_: nombre del disco
 * ano_publicacion_: año de publicación del disco
 * canciones_: un array de las canciones del disco
 */
export class Disco {
  private nombre_: string;
  private ano_publicacion_: number;
  private canciones_: Cancion[];

  /**
   * Constructor de la clase Discografía.
   * @param nombre nombre del disco
   * @param ano año del disco
   * @param canciones array de la clase 'Cancion'
   */
  constructor(nombre: string, ano: number, canciones: Cancion[]) {
    this.nombre_ = nombre;
    this.ano_publicacion_ = ano;
    this.canciones_ = canciones;
  }

  /**
   * Getter del nombre del Disco
   * @return string
   */
  get nombre(): string {
    return this.nombre_;
  }

  /**
   * Getter del año del Disco
   * @return number
   */
  get ano(): number {
    return this.ano_publicacion_;
  }

  /**
   * Getter de las canciones del Disco
   * @return Cancion[]
   */
  get canciones(): Cancion[] {
    return this.canciones_;
  }

  /**
   * Función para obtener el nombre de las canciones en formato array de string
   * @return string[]
   */
  canciones_array(): string[] {
    let array_canciones: string[] = [];
    for (let i: number = 0; i < this.canciones.length; i++) {
      array_canciones[i] = this.canciones[i].nombre;
    }
    return array_canciones;
  }

  /**
   * Para obtener el número de canciones del Disco
   * @return number
   */
  numero_canciones(): number {
    return this.canciones_.length;
  }

  /**
   * Para obtener la duración total de todas las canciones del disco
   * @return number
   */
  duracion_disco(): number {
    let duracion: number = 0;
    for (let i: number = 0; i < this.numero_canciones(); i++) {
      duracion += this.canciones_[i].duracion;
    }
    return duracion;
  }

  /**
   * Para obtener el número total de reproducciones de todas las canciones del disco
   * @return number
   */
  reproducciones_disco(): number {
    let reproducciones: number = 0;
    for (let i: number = 0; i < this.numero_canciones(); i++) {
      reproducciones += this.canciones_[i].numero_reproducciones;
    }
    return reproducciones;
  }
}
