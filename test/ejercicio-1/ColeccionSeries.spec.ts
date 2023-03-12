import "mocha";
import { expect } from "chai";
import { ColeccionSeries } from "../../src/ejercicio-1/ColeccionSeries";

describe(" Tests de 'ColeccionSeries' ", () => {
  let seriescoleccion: ColeccionSeries = new ColeccionSeries([
    {
      titulo_: "Los tiburones no matan (tanto)",
      fecha_: [23, "mayo", 2030],
      sinopsis_: "los tiburones tienen fama de asesinos",
      tematica_: "animales",
      plataforma_: "HBO MAX",
      temporadas_: 2,
      capitulos_: 15,
      personajes_: ["Fran Cuesta", "Nacho"],
    },
    {
      titulo_: "El león come gambas (MasterChef)",
      fecha_: [26, "febrero", 2030],
      sinopsis_: "la historia detrás del famoso plato",
      tematica_: "animales",
      plataforma_: "Netflix",
      temporadas_: 11,
      capitulos_: 20,
      personajes_: ["Pepe", "Jordi", "Samatha", "Aspirante"],
    },
    {
      titulo_: "Las serpientes asesinas",
      fecha_: [12, "junio", 2050],
      sinopsis_: "el animal más mortifero de todos los tiempos",
      tematica_: "animales",
      plataforma_: "Netflix",
      temporadas_: 1,
      capitulos_: 4,
      personajes_: ["Fran Cuesta", "Nacho"],
    },
  ]);
  it("busquedaporNombre()", () => {
    expect(
      seriescoleccion.busquedaporNombre("Los tiburones no matan (tanto)")
    ).to.be.eql({
      titulo_: "Los tiburones no matan (tanto)",
      fecha_: [23, "mayo", 2030],
      sinopsis_: "los tiburones tienen fama de asesinos",
      tematica_: "animales",
      plataforma_: "HBO MAX",
      temporadas_: 2,
      capitulos_: 15,
      personajes_: ["Fran Cuesta", "Nacho"],
    });
  });
  it("busquedaporAno()", () => {
    expect(seriescoleccion.busquedaporAno(2030)).to.be.eql([
      {
        titulo_: "Los tiburones no matan (tanto)",
        fecha_: [23, "mayo", 2030],
        sinopsis_: "los tiburones tienen fama de asesinos",
        tematica_: "animales",
        plataforma_: "HBO MAX",
        temporadas_: 2,
        capitulos_: 15,
        personajes_: ["Fran Cuesta", "Nacho"],
      },
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        temporadas_: 11,
        capitulos_: 20,
        personajes_: ["Pepe", "Jordi", "Samatha", "Aspirante"],
      },
    ]);
  });

  it("busquedaporPlataforma()", () => {
    expect(seriescoleccion.busquedaporPlataforma("Netflix")).to.be.eql([
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        temporadas_: 11,
        capitulos_: 20,
        personajes_: ["Pepe", "Jordi", "Samatha", "Aspirante"],
      },
      {
        titulo_: "Las serpientes asesinas",
        fecha_: [12, "junio", 2050],
        sinopsis_: "el animal más mortifero de todos los tiempos",
        tematica_: "animales",
        plataforma_: "Netflix",
        temporadas_: 1,
        capitulos_: 4,
        personajes_: ["Fran Cuesta", "Nacho"],
      },
    ]);
  });

  it("busquedaporTematica()", () => {
    expect(seriescoleccion.busquedaporTematica("animales")).to.be.eql([
      {
        titulo_: "Los tiburones no matan (tanto)",
        fecha_: [23, "mayo", 2030],
        sinopsis_: "los tiburones tienen fama de asesinos",
        tematica_: "animales",
        plataforma_: "HBO MAX",
        temporadas_: 2,
        capitulos_: 15,
        personajes_: ["Fran Cuesta", "Nacho"],
      },
      {
        titulo_: "El león come gambas (MasterChef)",
        fecha_: [26, "febrero", 2030],
        sinopsis_: "la historia detrás del famoso plato",
        tematica_: "animales",
        plataforma_: "Netflix",
        temporadas_: 11,
        capitulos_: 20,
        personajes_: ["Pepe", "Jordi", "Samatha", "Aspirante"],
      },
      {
        titulo_: "Las serpientes asesinas",
        fecha_: [12, "junio", 2050],
        sinopsis_: "el animal más mortifero de todos los tiempos",
        tematica_: "animales",
        plataforma_: "Netflix",
        temporadas_: 1,
        capitulos_: 4,
        personajes_: ["Fran Cuesta", "Nacho"],
      },
    ]);
  });
});
