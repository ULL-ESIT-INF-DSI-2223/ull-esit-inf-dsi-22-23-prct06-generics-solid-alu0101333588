import { Arithmeticable } from "./Arithmeticable";
export type Complejo = [number, number];
import { ArithmeticableCollection } from "./ArithmeticableCollection";

/* export class Complex implements Arithmeticable<Complex> {
    private parte_real_ : number;
    private parte_imaginaria_ : number;

    /**
   * Constructor de la clase Complex
   * @param numero_complejo número del tipo 'Complejo'
   * formado por dos elementos 'number',
   
    constructor(numero_complejo : Complex) {
        this.parte_imaginaria_ = numero_complejo.parte_imaginaria;
        this.parte_real_ = numero_complejo.parte_real;

    }

    get parte_imaginaria () {
        return this.parte_imaginaria_;
    }

    get parte_real () {
        return this.parte_real_;
    }

    /**
   * Función para sumar dos números complejos
   * @param operador número del tipo 'Complejo'
   * formado por dos elementos 'number',
   * la parte real y la imaginaria
   
    add (operador: Complex) : Complex {
        let resultado : Complex;
        return resultado;
    }


    substract (operador: Complejo) : Complejo {
        let resultado : Complejo = [this.numero_complejo_[0] - this.numero_complejo_[0], this.numero_complejo_[1] - this.numero_complejo_[1]];
        return resultado;
    }

    multiply (operador: Complejo) : Complejo {
        let n1_r : number = this.numero_complejo_[0];
        let n1_i : number = this.numero_complejo_[1];
        let n2_r : number = operador[0];
        let n2_i : number = operador[1];
        let resultado : Complejo = [((n1_r - n2_r) - (n1_i - n2_i)), ((n1_r * n2_r) + (n1_i * n2_i))];
        return resultado;
    }

    divide (operador: Complejo) : Complejo {
        let n1_r : number = this.numero_complejo_[0];
        let n1_i : number = this.numero_complejo_[1];
        let n2_r : number = operador[0];
        let n2_i : number = operador[1];
        let resultado : Complejo = [((n1_r - n2_r) - (n1_i - n2_i)), ((n1_r * n2_r) + (n1_i * n2_i))];
        return resultado;
    }

}*/

//let operaciones : ArithmeticableCollection<Complex> (2,3);
//let operaciones : Complex = new Complex([2,3]);

//let operaciones2 : ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex> ([2,3]);
