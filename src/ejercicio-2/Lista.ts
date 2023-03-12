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
    * Getter para obtener los valores del atributo lista_
    * @return lista : array de tipo genérico T
    */
    get get_lista () {
        return this.lista_;
    }

    /**
    * Función para obtener el valor de una posición concreta
    * del atributo lista_
    * @param n : number, es el índice de la posición donde
    * se encuentra el valor a obtener del atributo
    * @return T, tipo genérico T.
    */
    elemento_lista (n : number) : T {
        return this.lista_[n];
    }

    /**
    * Función 'append' para añadir los elementos de una lista a otra
    * @param lista2 : elemento de la clase 'Lista<T>'
    * @return array de tipo genérico T
    */
    append (lista2 : Lista<T>) : T[] {
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
                lista_concatenada.push(listas[i].elemento_lista(j));
                j++;
            }
            i++;
        }
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
        let i : number = this.length()-1;
        while (this.lista_[i]) {
            lista_invertida.push(this.lista_[i]);
            i--;
        }
        return lista_invertida;
    }

    /**
    * Función 'forEach' que dada una lista,
    * devuelva un valor después de aplicar la condición indicada
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

let lista_prueba : Lista<number> = new Lista<number> ([20, 21, 22, 23, 24, 25, 26, 27]);
let lista_prueba_2 : Lista<number> = new Lista<number> ([30, 31, 32, 33, 34, 35, 36, 37]);
let lista_prueba_3 : Lista<number> = new Lista<number> ([40, 41, 42, 43, 44, 45, 46, 47]);
let lista_prueba_4 : Lista<number> = new Lista<number> ([50, 51, 52, 53, 54, 55, 56, 57]);
console.log(`append: [${lista_prueba.append(lista_prueba_2)}]`);
let listas_para_concatenar: Lista<number>[] = [];
listas_para_concatenar.push(lista_prueba_2);
listas_para_concatenar.push(lista_prueba_3);
listas_para_concatenar.push(lista_prueba_4);
console.log(`concatenate(): [${lista_prueba_2.concatenate(listas_para_concatenar)}]`);
console.log(`filter(): [${lista_prueba.filter((elemento) => elemento === 20+3)}]`);
console.log(`length(): [${lista_prueba_2.length()}]`);
console.log(`map(): [${lista_prueba_2.map((elemento) => elemento * 2)}]`);
console.log(`reduce(): [${lista_prueba_2.reduce((acumulador, elemento) => acumulador + elemento, 2)}]`);
console.log(`reverse(): [${lista_prueba_2.reverse()}]`);
let numero : number = 1;
console.log(`forEach(): [${lista_prueba_2.forEach((elemento) => numero *= elemento)}]`);