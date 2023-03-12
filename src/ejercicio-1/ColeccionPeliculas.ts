import { Pelicula } from "./Pelicula";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { fecha } from "./Serie";

/**
 * Clase 'ColeccionPeliculas' es una extensión de la clase 'BasicStreamableCollection' de tipo 'Pelicula'
 * @param Peliculas_ es un array de la interfaz 'Pelicula'
 */
export class ColeccionPeliculas extends BasicStreamableCollection<Pelicula> {
  constructor(Peliculas: Pelicula[]) {
    super(Peliculas);
  }

  /**
   * Función para realizar busquedas por nombre
   * @param nombre el nombre del contenido a buscar
   * @returns Pelicula
   */
  busquedaporNombre(nombre: string): Pelicula | boolean {
    let salida: Pelicula;
    for (let i: number = 0; i < this.coleccion_.length; i++) {
      if (this.coleccion_[i].titulo_ === nombre) {
        return this.coleccion_[i];
      }
    }
    return false;
  }

  /**
   * Función para realizar busquedas por año
   * @param ano el año del contenido a buscar
   * @returns array de tipo Pelicula
   */
  busquedaporAno(ano: number): Pelicula[] {
    let salida: Pelicula[] = [];
    for (let i: number = 0; i < this.coleccion_.length; i++) {
      let fecha_busqueda: fecha = this.coleccion_[i].fecha_;
      let ano_busqueda: number = fecha_busqueda[2];
      if (ano_busqueda === ano) {
        salida.push(this.coleccion_[i]);
      }
    }
    return salida;
  }

  /**
   * Función para realizar busquedas por plataforma de contenidos
   * @param plataforma plataforma del contenido a buscar
   * @returns array de tipo Pelicula
   */
  busquedaporPlataforma(plataforma: string): Pelicula[] {
    let salida: Pelicula[] = [];
    for (let i: number = 0; i < this.coleccion_.length; i++) {
      if (this.coleccion_[i].plataforma_ === plataforma) {
        salida.push(this.coleccion_[i]);
      }
    }
    return salida;
  }

  /**
   * Función para realizar busquedas por temática-género
   * @param tema el género del contenido a buscar
   * @returns array de tipo Pelicula
   */
  busquedaporTematica(tema: string): Pelicula[] {
    let salida: Pelicula[] = [];
    for (let i: number = 0; i < this.coleccion_.length; i++) {
      if (this.coleccion_[i].tematica_ === tema) {
        salida.push(this.coleccion_[i]);
      }
    }
    return salida;
  }
}
