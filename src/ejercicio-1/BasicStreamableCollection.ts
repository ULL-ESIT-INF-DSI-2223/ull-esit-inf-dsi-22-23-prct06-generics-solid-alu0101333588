import { Streamable } from "./Streamable";

/**
 * Clase abstracta 'BasicStreamableCollection' de tipo genérico T
 * @param coleccion_ de tipo génerico T, alberga la colección de contenido
 * @param busquedaporNombre función abstracta
 * @param busquedaporGenero función abstracta
 * @param busquedaporPlataforma función abstracta
 * @param busquedaporAno función abstracta
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    
    protected coleccion_ : T[];

    /**
    * Constructor de la clase
    * @param coleccion el nombre del contenido a buscar
    */
   constructor (coleccion : T[]) {
    this.coleccion_ = coleccion;
   }
    
    /**
    * Función para realizar busquedas por nombre
    * @param nombre el nombre del contenido a buscar
    * @returns T : tipo genérico
    */
    abstract busquedaporNombre(nombre : string) : T | boolean;

    /**
    * Función para realizar busquedas por año
    * @param ano el año del contenido a buscar
    * @returns array de tipo genérico T
    */
    abstract busquedaporAno (ano : number) : T[];

    /**
    * Función para realizar busquedas por plataforma de contenidos
    * @param plataforma plataforma del contenido a buscar
    * @returns array de tipo genérico T
    */
    abstract busquedaporPlataforma(plataforma : string) : T[];

    /**
    * Función para realizar busquedas por temática-género
    * @param tema el género del contenido a buscar
    * @returns array de tipo genérico T
    */
    abstract busquedaporTematica(tema : string) : T[];

    /**
    * Función para Añadir contenido a la colección
    * @param T, tipo genérico, del cotnenido en cuestión a añadir
    */
    anadir_contenido(coleccion : T) {
        this.coleccion_.push(coleccion);
    }
}