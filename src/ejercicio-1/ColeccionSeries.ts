import { Serie } from "./Serie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { fecha } from "./Serie";

/**
 * Clase 'ColeccionSeries' es una extensión de la clase 'BasicStreamableCollection' de tipo 'Serie'
 * @param Series_ es un array de la interfaz 'Serie'
 */
export class ColeccionSeries extends BasicStreamableCollection<Serie> {
    
    constructor (Series : Serie[]) {
        super(Series);
    }

    /**
    * Función para realizar busquedas por nombre
    * @param nombre el nombre del contenido a buscar
    * @returns Serie
    */
    busquedaporNombre(nombre : string) : Serie | boolean{
        let salida : Serie;
        for (let i : number = 0; i < this.coleccion_.length; i++) {
            if (this.coleccion_[i].titulo_ === nombre) {
                return this.coleccion_[i];
            }
        }
        return false;
    }

    /**
    * Función para realizar busquedas por año
    * @param ano el año del contenido a buscar
    * @returns array de tipo Serie
    */
    busquedaporAno (ano : number) : Serie[] {
        let salida : Serie[] = [];
        for (let i : number = 0; i < this.coleccion_.length; i++) {
            let fecha_busqueda : fecha = this.coleccion_[i].fecha_;
            let ano_busqueda : number = fecha_busqueda[2];
            if (ano_busqueda === ano) {
                salida.push(this.coleccion_[i]);
            }
        }
        return salida;
    }

    /**
    * Función para realizar busquedas por plataforma de contenidos
    * @param plataforma plataforma del contenido a buscar
    * @returns array de tipo Serie
    */
    busquedaporPlataforma(plataforma : string) : Serie[] {
        let salida : Serie[] = [];
        for (let i : number = 0; i < this.coleccion_.length; i++) {
            if (this.coleccion_[i].plataforma_ === plataforma) {
                salida.push(this.coleccion_[i]);
            }
        }
        return salida;
    }

    /**
    * Función para realizar busquedas por temática-género
    * @param genero el género del contenido a buscar
    * @returns array de tipo Serie
    */
    busquedaporTematica(genero : string) : Serie[] {
        let salida : Serie[] = [];
        for (let i : number = 0; i < this.coleccion_.length; i++) {
            if (this.coleccion_[i].tematica_ === genero) {
                salida.push(this.coleccion_[i]);
            }
        }
        return salida;
    }

    /**
    * Función para realizar busquedas por número de temporadas
    * @param temporadas el numero de temporadas a buscar
    * @returns Serie[]
    */
    busquedaporTemporadas(temporadas : number) : Serie[] {
        let salida : Serie[] = [];
        for (let i : number = 0; i < this.coleccion_.length; i++) {
            if (this.coleccion_[i].temporadas_ === temporadas) {
                salida.push(this.coleccion_[i]);
            }
        }
        return salida;
    }

}