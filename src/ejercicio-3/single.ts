import { Cancion } from "./cancion";

/**
 * Clase que alberga los singles de los artistas.
 * Los atributos de la clase son:
 * nombre_: nombre del single
 * ano_publicacion_: año de publicación del single
 * versiones_: un array de las versiones del single
 */
export class Single {
  private nombre_: string;
  private ano_publicacion_: number;
  private versiones_: Cancion[];

  /**
   * Constructor de la clase Singlegrafía.
   * @param nombre nombre del single
   * @param ano año del single
   * @param versiones array de la clase 'Cancion'
   */
  constructor(nombre: string, ano: number, versiones: Cancion[]) {
    this.nombre_ = nombre;
    this.ano_publicacion_ = ano;
    this.versiones_ = versiones;
  }

  /**
   * Getter del nombre del Single
   * @return string
   */
  get nombre(): string {
    return this.nombre_;
  }

  /**
   * Getter del año del Single
   * @return number
   */
  get ano(): number {
    return this.ano_publicacion_;
  }

  /**
   * Getter de las versiones del Single
   * @return Cancion[]
   */
  get versiones(): Cancion[] {
    return this.versiones_;
  }

  /**
   * Función para obtener el nombre de las versiones en formato array de string
   * @return string[]
   */
  versiones_array(): string[] {
    let array_versiones: string[] = [];
    for (let i: number = 0; i < this.versiones_.length; i++) {
      array_versiones[i] = this.versiones_[i].nombre;
    }
    return array_versiones;
  }

  /**
   * Para obtener el número de versiones del Single
   * @return number
   */
  numero_versiones(): number {
    return this.versiones_.length;
  }

  /**
   * Para obtener el número total de reproducciones de todas las versiones del single
   * @return number
   */
  reproducciones(): number {
    let reproducciones: number = 0;
    for (let i: number = 0; i < this.numero_versiones(); i++) {
      reproducciones += this.versiones_[i].numero_reproducciones;
    }
    return reproducciones;
  }
}
