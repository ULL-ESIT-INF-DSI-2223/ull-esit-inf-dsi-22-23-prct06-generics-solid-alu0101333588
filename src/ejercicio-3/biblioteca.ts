import { Artista } from "./artista";
import { Single } from "./single";
import { Disco } from "./disco";
/**
 * Clase que alberga la Biblioteca musical
 * Los atributos de la clase son:
 * artistas_: conjunto de artistas de la biblioteca
 */
export class Biblioteca {
  private artistas_: Artista<Single | Disco>[];

  /**
   * Constructor de la clase Biblioteca
   * @param artistas_entrantes artistas de la biblioteca
   */
  constructor(artistas_entrantes: Artista<Single | Disco>[]) {
    this.artistas_ = artistas_entrantes;
  }


  /**
   * Buscador de Artistas
   * @param nombre nombre del artista
   * @return si ese artista está en la librería o no
   */
  BuscarArtista(nombre: string) : string | boolean {
    let numero_artistas: number = this.artistas_.length;
    for (let i: number = 0; i < numero_artistas; i++) {
      let nombre_artista: string = this.artistas_[i].nombre;
      if (nombre_artista === nombre) {
        let oyentes: number = this.artistas_[i].numero_oyentes_mensuales;
        console.table([[nombre_artista, oyentes]]);
        return nombre_artista;
      }
    }
    return false;
  }


}
