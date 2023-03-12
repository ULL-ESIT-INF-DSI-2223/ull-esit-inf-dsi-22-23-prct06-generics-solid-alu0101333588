import "mocha";
import { expect } from "chai";
import { Biblioteca } from "../../src/ejercicio-3/biblioteca";
import { Artista } from "../../src/ejercicio-3/artista";
import { Cancion } from "../../src/ejercicio-3/cancion";
import { Discografia } from "../../src/ejercicio-3/discografia";
import { Disco } from "../../src/ejercicio-3/disco";

describe("Test Clase Biblioteca", () => {
  let disco: Disco = new Disco("Temporada de Raggaeton", 2021, [
    new Cancion("Bailando te conocí", 160, ["trap"], false, 14000000),
  ]);
  let disco1: Disco[] = [];
  disco1[0] = disco;
  let biblioteca: Biblioteca = new Biblioteca([
    new Artista("Duki", 15000000, new Discografia(disco1)),
  ]);
  it("BuscarArtista ('Duki') = Duki", () => {
    expect(biblioteca.BuscarArtista("Duki")).to.be.eql("Duki");
  });
  it("BuscarArtista ('Duki') = Duki", () => {
    expect(biblioteca.BuscarArtista("Pepe Benavente")).to.be.eql(false);
  });
});
