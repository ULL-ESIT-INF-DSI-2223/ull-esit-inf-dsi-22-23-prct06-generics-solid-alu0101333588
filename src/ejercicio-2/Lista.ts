/**
 * Clase genérica 'Lista' de tipo T
 * @param lista_ es un array de tipo genérico T
 */
export class Lista<T> {
    private lista_ : T[];

    /**
    * Constructor de la clase 'Lista'
    * @param lista : array de tipo genérico T
    */
    constructor (lista : T[]) {
        this.lista_ = lista;
    }

    /**
    * Función 'append' para añadir los elementos de una lista a otra
    * @param lista2 : elemento de la clase 'Lista<T>'
    * @return array de tipo genérico T
    */
    append (lista2 : Lista<T>) : T[] {
        //for (let i : number = 0; i < lista2.lista_.length; i++) {
        let i : number = 0;
        while (lista2.lista_[i]) { 
            this.lista_.push(lista2.lista_[i]);
            i++;
        }
           
        return this.lista_;
    }

    /**
    * Función 'concatenate' para concatenar un número indefinido de listas
    * @param listas : array de elementos de tipo clase 'Lista'
    * @return array de tipo genérico T
    */
    concatenate (listas : Lista<T>[]) : T[] {
        let lista_concatenada : T[] = [];
        let i : number = 0;
        while (listas[i]) {
            let j : number = 0;
            while (listas[i].lista_[j]) {
                this.lista_.push(listas[i].lista_[j]);
                j++;
            }
            i++;
        }
        /*for (let i : number = 0; i < listas.length; i++) {
            for (let j : number = 0; j < listas[i].lista_.length; j++) {
                lista_concatenada.push(listas[i].lista_[j]);
            }
        }*/
        return lista_concatenada;
    }

    /**
    * Función 'filter' para buscar en una lista un predicado lógico
    * @param predicado_logico : callback
    * @return array de tipo genérico T
    */
    filter (predicado_logico : ((lista_: T) => boolean)) : T[] {
        let lista_filtrada : T[] = [];
        
        let i : number = 0;
        while (this.lista_[i]) { 
            if (predicado_logico(this.lista_[i])) {
                lista_filtrada.push(this.lista_[i]);
            }
            i++;
        }

        /*for (let i : number = 0; i < this.lista_.length; i++) {
           if (predicado_logico(this.lista_[i])) {
            lista_filtrada.push(this.lista_[i]);
           }
        }*/

        return lista_filtrada;
    }

    /**
    * Función 'length' que retorna el número de elemntos de la lista
    * @return number del tamaño de la lista
    */
    length () : number {
        let i : number = 0;
        while (this.lista_[i]) {
            i++;
        }
        //console.log(`prueba: ${i}`);
        return i;
    }

    /**
    * Función 'map' que retorna una lista, aplicando la función indicada
    * @param funcion a aplicar en la lista
    * @return array de tipo genérico T
    */
    map (funcion : ((lista_: T) => T)) : T[] {
        let lista_aplicada  : T[] = [];
        let i : number = 0;
        while (this.lista_[i]) {
            lista_aplicada.push(funcion(this.lista_[i]));
            i++;
        }
        return lista_aplicada;
    }

    /**
    * Función 'reduce' que dada una lista, una función y un acumulador inicial,
    * reduzca los elementos del acumulador empleando la función
    * @param funcion a aplicar en la lista
    * @param acumulador_inicial
    * @return tipo genérico T
    */
    reduce (funcion : (acumulador: T, lista_ : T) => T, acumulador_inicial : T) : T {
        let lista_aplicada  : T = acumulador_inicial;
        let i : number = 0;
        while (this.lista_[i]) {
            lista_aplicada = (funcion(lista_aplicada, this.lista_[i]));
            i++;
        }
        return lista_aplicada;
    }

    /**
    * Función 'reverse' que dada una lista,
    * devuelva una lista ocn los elementos originales en orden inverso
    * @return array de tipo genérico T
    */
    reverse () : T[] {
        let lista_invertida  : T[] = [];
        let i : number = this.length();
        while (this.lista_[i]) {
            lista_invertida.push(this.lista_[i]);
            i--;
        }
        return lista_invertida;
    }

    /**
    * Función 'forEach' que dada una lista,
    * devuelva una lista ocn los elementos originales en orden inverso
    * @param funcion con las instrucciones : callback
    * @return array de tipo genérico T
    */
    forEach (funcion : (lista_ : T) => void) : void {
        let resultado_iteraciones : void;
        let i : number = 0;
        while (this.lista_[i]) {
            resultado_iteraciones = funcion(this.lista_[i]);
            i++;
        }
        return resultado_iteraciones;
    }

    
}