/**
 * Clase para una Canción
 * Los atributos de la clase son:
 * nombre_: de tipo string, nombre de la canción
 * duracion_ : de tipo number, la duración de la canción
 * generos_ : String[], los géneros de la canción
 * single_: boolean, si es o no un single
 * numero_reproducciones_: number, el número de reproducciones
 */
export class Cancion {
  private nombre_: string;
  private duracion_: number;
  private generos_: string[];
  private single_: boolean;
  private numero_reproducciones_: number;

  /**
   * Constructor de la clase Canción
   * @param nombre string
   * @param duracion number
   * @param generos string[]
   * @param single boolean
   * @param numero_reproducciones number
   */
  constructor(
    nombre: string,
    duracion: number,
    generos: string[],
    single: boolean,
    numero_reproducciones: number
  ) {
    this.nombre_ = nombre;
    this.duracion_ = duracion;
    this.generos_ = generos;
    this.single_ = single;
    this.numero_reproducciones_ = numero_reproducciones;
  }

  /**
   * Getter numero de reproducciones
   * @return number
   */
  get numero_reproducciones() {
    return this.numero_reproducciones_;
  }

  /**
   * Getter sobre si es un single o no
   * @return boolean
   */
  get single() {
    return this.single_;
  }

  /**
   * Getter el array de string de los géneros
   * @return string[]
   */
  get generos() {
    return this.generos_;
  }

  /**
   * Getter duración de la canción
   * @return number
   */
  get duracion() {
    return this.duracion_;
  }

  /**
   * Getter nombre de la canción
   * @return string
   */
  get nombre() {
    return this.nombre_;
  }
}
