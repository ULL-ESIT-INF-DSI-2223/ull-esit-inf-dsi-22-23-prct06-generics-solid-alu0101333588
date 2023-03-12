import 'mocha';
import {expect} from 'chai';
import {Lista} from "../../src/ejercicio-2/Lista";

describe(" Tests Lista ", () => {
    let lista_prueba : Lista<number> = new Lista<number> ([20,21,22,23,24,25,26,27]);
    let lista_prueba_2 : Lista<number> = new Lista<number> ([30,31,32,33,34,35,36,37]);
    let lista_prueba_3 : Lista<number> = new Lista<number> ([40,41,42,43,44,45,46,47]);
    let lista_prueba_4 : Lista<number> = new Lista<number> ([50,51,52,53,54, 5,56,57]);


    let lista_append : number[] = [20,21,22,23,24,25,26,27,30,31,32,33,34,35,36,37];
    it("append()", () => {
        expect(lista_prueba.append(lista_prueba_2)).to.be.equal(lista_append);
    });

    
    let listas_para_concatenar: Lista<number>[] = [];
    listas_para_concatenar.push(lista_prueba_2);
    listas_para_concatenar.push(lista_prueba_3);
    listas_para_concatenar.push(lista_prueba_4);
    let lista_concatenate : number[] = [30,31,32,33,34,35,36,37,40,41,42,43,44,45,46,47,50,51,52,53,54,55,56,57];
    it("concatenate()", () => {
       expect(lista_prueba_2.concatenate(listas_para_concatenar)).to.be.equal(lista_concatenate);
    });

    it("filter()", () => {
        expect(lista_prueba.filter((elemento) => elemento === 20+3)).to.be.equal([23]);
    });

    it("length()", () => {
        expect(lista_prueba_2.length()).to.be.equal(8);
    });

    let lista_map : number[] = [60,62,64,66,68,70,72,74];
    it("map()", () => {
        expect(lista_prueba_2.map((elemento) => elemento * 2)).to.be.equal(lista_map);
    });

    it("reduce()", () => {
        expect(lista_prueba_2.reduce((acumulador, elemento) => acumulador + elemento, 2)).to.be.equal(270);
    });

    it("reverse()", () => {
        expect(lista_prueba_2.reverse()).to.be.equal([37,36,35,34,33,32,31,30]);
    });
    
});