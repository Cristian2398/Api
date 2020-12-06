/*--------------------INSERTAR LOS PLANTILLA--------------------- */
{
    "nombre_eq": "Real Popayán",
    "edicion_torneo": "Liga de Campeones 2021",
    "fase": "clasificacion_grupos",
    "grupo": "a",
    "jugadores": [
        { "nombre": "Oblak", "n_camiseta": 1, "altura": 185, "edad": 25 },
        { "nombre": "N'Golo Kanté", "n_camiseta": 18, "altura": 177, "edad": 29 },
        { "nombre": "Eriksen", "n_camiseta": 30, "altura": 178, "edad": 29 },
        { "nombre": "Jordi Alba", "n_camiseta": 42, "altura": 176, "edad": 19 },
        { "nombre": "Jan Vertonghen", "n_camiseta": 54, "altura": 191, "edad": 27 },
        { "nombre": "Milan Škriniar", "n_camiseta": 66, "altura": 187, "edad": 36 },
        { "nombre": "Varane", "n_camiseta": 78, "altura": 200, "edad": 33 }
    ]
}

/*--------------------INSERTAR LOS EQUIPOS--------------------- */
{
    "nombre_eq": "Real Popayán",
    "entrenador": "Ruben",
    "sitio_web": "RealPopayan.com",
    "email": "real_popayan@gmail.com",
    "fundado": "fundado el 10 de abril de 1983"
}

/*--------------------INSERTAR LOS JUGADORES--------------------- */
{
    "nombre": "Mina",
    "n_camiseta": 2,
    "altura": 196,
    "edad": 25
}

/*--------------------INSERTAR LOS PARTIDOS-------------------- */
{
  "inicio": "30/11/2020 8:00",
  "fin": "30/11/2020 9:00",
  "torneo": "Liga de Campeones 2021",
  "fase": "clasificacion",
  "grupo": "a",
  "estadio": "Estadio Olímpico de Atenas",
  "ubicacion": "Atenas, Grecia",
  "arbitros": {
    "principal": "Pedro",
    "linea": "Simón",
    "var": "Pedro"
  },
  "equipoLocal": {
    "nombre": "Atlético de Madrid ",
    "plantilla": [
      "Oblak",
      "N'Golo Kanté",
      "Eriksen",
      "Jordi Alba",
      "Jan Vertonghen",
      "Milan Škriniar",
      "Varane"
    ]
  },
  "equipoVisitante": {
    "nombre": "Barcelona",
    "plantilla": [
      "Messi",
      "Sergio Agüero",
      "Aubameyang",
      "Godín",
      "Aymeric Laporte",
      "Marquinhos",
      "Daniel Parejo"
    ]
  },
  "incidencias": [
    {
      "nombre_equipo": "Atlético de Madrid ",
      "jugador": "Jan Vertonghen",
      "minuto": 6,
      "tipo_incidencia": "gol",
      "detalles": "1"
    }
  ]
}

/*--------------------INSERTAR LOS ESTADIOS-------------------- */
{
    "nombre": "Estadio Allianz Arena",
    "ubicacion": "Imtech Arena, Alemania",
    "aforo": 31207,
    "sitio_web": "imtech_arena.com",
    "fundado": "30 de mayo de 2005"
}

/*------------INSERTAR LOS RESULTADOS DEL TORNEO-----------------*/
//Insert Nuevo Torneo
{
    "edicion": "Liga de Campeones 2020",
        "fases": [{
            "nombre": "clasificacion_grupos",
            "grupos": [
                { "nombre": "a", "Posicion": 1, "Equipo": "Chelsea", "PG": 2, "PE": 0, "PP": 0, "GF": 2, "GC": 0, "GD": 2, "Puntos": 6 }
            ]
        }]
}
