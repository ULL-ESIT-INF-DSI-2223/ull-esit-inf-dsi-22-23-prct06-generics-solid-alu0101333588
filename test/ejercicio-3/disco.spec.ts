import "mocha";
import { expect } from "chai";
import { Biblioteca } from "../../src/ejercicio-3/biblioteca";
import { Artista } from "../../src/ejercicio-3/artista";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Discografia } from "../../src/ejercicio-3/discografia";
import { Disco } from "../../src/ejercicio-3/disco";

describe("Test Clase Disco", () => {


  let cancion_prueba: Cancion = new Cancion("El gallo sube", 3, ["clasicas", "pop"], true, 120000);
  let conjunto_canciones_prueba : Cancion[] = [cancion_prueba];
  let disco_prueba : Disco = new Disco ("Disco de oro", 1999, [cancion_prueba]);
  
  it("get nombre ()", () => {
    expect(disco_prueba.nombre).to.be.eql("Disco de oro");
  });

  it("get ano ()", () => {
    expect(disco_prueba.ano).to.be.eql(1999);
  });

  it("get canciones ()", () => {
    expect(disco_prueba.canciones).to.be.eql(conjunto_canciones_prueba);
  });

  it("canciones_array ()", () => {
    expect(disco_prueba.canciones_array()).to.be.eql(["El gallo sube"]);
  });

  it("numero_canciones ()", () => {
    expect(disco_prueba.numero_canciones()).to.be.eql(1);
  });

  it("duracion_disco ()", () => {
    expect(disco_prueba.duracion_disco()).to.be.eql(3);
  });

  it("reproducciones_disco ()", () => {
    expect(disco_prueba.reproducciones_disco()).to.be.eql(120000);
  });

});