import 'mocha';
import {expect} from 'chai';
import {ColeccionPeliculas} from "../../src/ejercicio-1/ColeccionPeliculas";


describe(" Tests de 'ColeccionPeliculas' ", () => {
    let peliculascoleccion : ColeccionPeliculas = new ColeccionPeliculas([
        {
            titulo_: "Los tiburones no matan (tanto)",
            fecha_: [23, "mayo", 2030],
            sinopsis_: "los tiburones tienen fama de asesinos",
            tematica_: "animales",
            plataforma_: "HBO MAX",
            duracion_ : 50,
            reparto_ : ["Fran Cuesta", "Nacho"]
        },
        {
            titulo_: "El león come gambas (MasterChef)",
            fecha_: [26, "febrero", 2030],
            sinopsis_: "la historia detrás del famoso plato",
            tematica_: "animales",
            plataforma_: "Netflix",
            duracion_ : 62,
            reparto_ : ["Pepe", "Jordi", "Samatha", "Aspirante"]
        },
        {
            titulo_: "Las serpientes asesinas",
            fecha_: [12, "junio", 2050],
            sinopsis_: "el animal más mortifero de todos los tiempos",
            tematica_: "animales",
            plataforma_: "Netflix",
            duracion_ : 50,
            reparto_ : ["Fran Cuesta", "Nacho"]
        },
    ]);
    it("busquedaporNombre()", () => {
        expect(peliculascoleccion.busquedaporNombre("Los tiburones no matan (tanto)")).to.be.eql(
            {
                titulo_: "Los tiburones no matan (tanto)",
                fecha_: [23, "mayo", 2030],
                sinopsis_: "los tiburones tienen fama de asesinos",
                tematica_: "animales",
                plataforma_: "HBO MAX",
                duracion_ : 50,
                reparto_ : ["Fran Cuesta", "Nacho"]
            }
        );
    });
    it("busquedaporAno()", () => {
        expect(peliculascoleccion.busquedaporAno(2030)).to.be.eql([
            {
                titulo_: "Los tiburones no matan (tanto)",
                fecha_: [23, "mayo", 2030],
                sinopsis_: "los tiburones tienen fama de asesinos",
                tematica_: "animales",
                plataforma_: "HBO MAX",
                duracion_ : 50,
                reparto_ : ["Fran Cuesta", "Nacho"]
            },
            {
                titulo_: "El león come gambas (MasterChef)",
                fecha_: [26, "febrero", 2030],
                sinopsis_: "la historia detrás del famoso plato",
                tematica_: "animales",
                plataforma_: "Netflix",
                duracion_ : 62,
                reparto_ : ["Pepe", "Jordi", "Samatha", "Aspirante"]
            }
        ]);
    });

    it("busquedaporPlataforma()", () => {
        expect(peliculascoleccion.busquedaporPlataforma("Netflix")).to.be.eql([
            {
                titulo_: "El león come gambas (MasterChef)",
                fecha_: [26, "febrero", 2030],
                sinopsis_: "la historia detrás del famoso plato",
                tematica_: "animales",
                plataforma_: "Netflix",
                duracion_ : 62,
                reparto_ : ["Pepe", "Jordi", "Samatha", "Aspirante"]
            },
            {
                titulo_: "Las serpientes asesinas",
                fecha_: [12, "junio", 2050],
                sinopsis_: "el animal más mortifero de todos los tiempos",
                tematica_: "animales",
                plataforma_: "Netflix",
                duracion_ : 50,
                reparto_ : ["Fran Cuesta", "Nacho"]
            }
        ]);
    });

    it("busquedaporTematica()", () => {
        expect(peliculascoleccion.busquedaporTematica("animales")).to.be.eql([
            {
                titulo_: "Los tiburones no matan (tanto)",
                fecha_: [23, "mayo", 2030],
                sinopsis_: "los tiburones tienen fama de asesinos",
                tematica_: "animales",
                plataforma_: "HBO MAX",
                duracion_ : 50,
                reparto_ : ["Fran Cuesta", "Nacho"]
            },
            {
                titulo_: "El león come gambas (MasterChef)",
                fecha_: [26, "febrero", 2030],
                sinopsis_: "la historia detrás del famoso plato",
                tematica_: "animales",
                plataforma_: "Netflix",
                duracion_ : 62,
                reparto_ : ["Pepe", "Jordi", "Samatha", "Aspirante"]
            },
            {
                titulo_: "Las serpientes asesinas",
                fecha_: [12, "junio", 2050],
                sinopsis_: "el animal más mortifero de todos los tiempos",
                tematica_: "animales",
                plataforma_: "Netflix",
                duracion_ : 50,
                reparto_ : ["Fran Cuesta", "Nacho"]
            }
        ]);
    });
});