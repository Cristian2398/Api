/*--------------------INSERTAR LOS PLANTILLA--------------------- */
/*------------------------------------------------------------- */

db.plantilla.insertMany(
[
  {
    "_id:": new ObjectId(),
    "nombre_eq": "Atlético de Madrid ",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "a",
    "jugadores": [
        {  "nombre": "Oblak", "n_camiseta": 1, "altura": 185, "edad": 25 },
        {  "nombre": "N'Golo Kanté", "n_camiseta": 18, "altura": 177, "edad": 29 },
        {  "nombre": "Eriksen", "n_camiseta": 30, "altura": 178, "edad": 29 },
        {  "nombre": "Jordi Alba", "n_camiseta": 42, "altura": 176, "edad": 19 },
        {  "nombre": "Jan Vertonghen", "n_camiseta": 54, "altura": 191, "edad": 27 },
        {  "nombre": "Milan Škriniar", "n_camiseta": 66, "altura": 187, "edad": 36 },
        {  "nombre": "Varane", "n_camiseta": 78, "altura": 200, "edad": 33 }
    ]
  },{
    "_id:": new ObjectId(),
    "nombre_eq": "Barcelona",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "a",
    "jugadores": [
        {  "nombre": "Messi", "n_camiseta": 1, "altura": 178, "edad": 35 },
        {  "nombre": "Sergio Agüero", "n_camiseta": 13, "altura": 174, "edad": 41 },
        {  "nombre": "Aubameyang", "n_camiseta": 25, "altura": 197, "edad": 29 },
        {  "nombre": "Godín", "n_camiseta": 37, "altura": 174, "edad": 41 },
        {  "nombre": "Aymeric Laporte", "n_camiseta": 49, "altura": 186, "edad": 23 },
        {  "nombre": "Marquinhos", "n_camiseta": 61, "altura": 183, "edad": 27 },
        {  "nombre": "Daniel Parejo", "n_camiseta": 73, "altura": 198, "edad": 31 }
    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Bayern de Múnich",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "a",
    "jugadores": [
        {  "nombre": "Mohamed Salah ", "n_camiseta": 1, "altura": 181, "edad": 39 },
        {  "nombre": "Griezmann", "n_camiseta": 20, "altura": 182, "edad":28 },
        {  "nombre": "Cavani", "n_camiseta": 32, "altura": 187, "edad": 37 },
        {  "nombre": "Fernandinho", "n_camiseta": 44, "altura": 184, "edad": 26 },
        {  "nombre": "Joshua Kimmich", "n_camiseta": 56, "altura": 181, "edad": 23 },
        {  "nombre": "Thomas Müller", "n_camiseta": 68, "altura": 186, "edad": 26 },
        {  "nombre": "Axel Witsel", "n_camiseta": 80, "altura": 183, "edad": 27 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Chelsea",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "a",
    "jugadores": [
        {  "nombre": "Mbappé", "n_camiseta": 1, "altura": 192, "edad": 19 },
        {  "nombre": "De Gea", "n_camiseta": 23, "altura": 197, "edad":29 },
        {  "nombre": "David Silva", "n_camiseta": 35, "altura": 193, "edad": 27 },
        {  "nombre": "Bernardo Silva", "n_camiseta": 47, "altura": 181, "edad": 38 },
        {  "nombre": "Di María", "n_camiseta": 59, "altura": 192, "edad": 31 },
        {  "nombre": "Isco", "n_camiseta": 71, "altura": 182, "edad": 24 },
        {  "nombre": "Alex Sandro", "n_camiseta": 83, "altura": 18, "edad": 30 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Liverpool",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "b",
    "jugadores": [
        {  "nombre": "Van Dijk", "n_camiseta": 1, "altura": 198, "edad": 29 },
        {  "nombre": "Alisson", "n_camiseta": 19, "altura": 196, "edad":35 },
        {  "nombre": "Pogba", "n_camiseta": 31, "altura": 197, "edad": 27 },
        {  "nombre": "Mats Hummels", "n_camiseta": 43, "altura": 193, "edad": 21 },
        {  "nombre": "Keylor Navas", "n_camiseta": 55, "altura": 191, "edad": 40 },
        {  "nombre": "Samuel Umtit", "n_camiseta": 67, "altura": 177, "edad": 28 },
        {  "nombre": "Andrew Robertson", "n_camiseta": 79, "altura": 168, "edad": 31 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Manchester City",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "b",
    "jugadores": [
        {  "nombre": "Kevin de Bruyne", "n_camiseta": 1, "altura": 186, "edad": 37 },
        {  "nombre": "Kalidou Koulibaly", "n_camiseta": 17, "altura": 176, "edad":33 },
        {  "nombre": "Kroos", "n_camiseta": 29, "altura": 191, "edad": 30 },
        {  "nombre": "Benzema", "n_camiseta": 41, "altura": 170, "edad": 41 },
        {  "nombre": "Lorenzo Insigne", "n_camiseta": 53, "altura": 185, "edad": 21 },
        {  "nombre": "Rakitić", "n_camiseta": 65, "altura": 186, "edad": 39 },
        {  "nombre": "Frenkie de Jong", "n_camiseta": 77, "altura": 173, "edad": 25 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Manchester United",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "b",
    "jugadores": [
        {  "nombre": "Sergio Ramos", "n_camiseta": 1, "altura": 178, "edad": 40 },
        {  "nombre": "Raheem Sterling", "n_camiseta": 24, "altura": 197, "edad":32 },
        {  "nombre": "Hugo Lloris", "n_camiseta": 36, "altura": 175, "edad": 22 },
        {  "nombre": "Thiago", "n_camiseta": 48, "altura": 179, "edad": 25 },
        {  "nombre": "Alexandre Lacazette", "n_camiseta": 60, "altura": 191, "edad": 36 },
        {  "nombre": "Wojciech Szczęsny", "n_camiseta": 72, "altura": 196, "edad": 35 },
        {  "nombre": "Niklas Süle", "n_camiseta": 84, "altura": 184, "edad": 32 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Nápoles",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "b",
    "jugadores": [
        {  "nombre": "Ter Stegen", "n_camiseta": 10, "altura": 172, "edad": 39 },
        {  "nombre": "Luis Suárez", "n_camiseta": 22, "altura": 184, "edad":18 },
        {  "nombre": "Ederson", "n_camiseta": 34, "altura": 175, "edad": 41 },
        {  "nombre": "Toby Alderweireld", "n_camiseta": 46, "altura": 192, "edad": 32 },
        {  "nombre": "Pjanić", "n_camiseta": 58, "altura": 179, "edad": 32 },
        {  "nombre": "Ciro Immobile", "n_camiseta": 70, "altura": 175, "edad": 39 },
        {  "nombre": "Fabinho", "n_camiseta": 82, "altura": 184, "edad": 28 }

    ]
}, {
    "_id:": new ObjectId(),
    "nombre_eq": "Piemonte Calcio",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "c",
    "jugadores": [
        {  "nombre": "Cristiano Ronaldo", "n_camiseta": 1, "altura": 183, "edad": 39 },
        {  "nombre": "Chiellini", "n_camiseta": 14, "altura": 200, "edad": 22 },
        {  "nombre": "Gerard Piqué", "n_camiseta": 26, "altura": 172, "edad": 23 },
        {  "nombre": "Dybala", "n_camiseta": 38, "altura": 182, "edad": 35 },
        {  "nombre": "Dries Mertens", "n_camiseta": 50, "altura": 168, "edad": 27 },
        {  "nombre": "Firmino", "n_camiseta": 62, "altura": 169, "edad": 41 },
        {  "nombre": "Marcelo", "n_camiseta": 74, "altura": 171, "edad": 22 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "PSG",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "c",
    "jugadores": [
        {  "nombre": "Neymar Jr", "n_camiseta": 3, "altura": 189, "edad": 19 },
        {  "nombre": "Lewandowski", "n_camiseta": 15, "altura": 200, "edad": 41 },
        {  "nombre": "Neuer", "n_camiseta": 27, "altura": 190, "edad": 40 },
        {  "nombre": "Courtois", "n_camiseta": 39, "altura": 189, "edad": 33 },
        {  "nombre": "Thiago Silva", "n_camiseta": 51, "altura": 191, "edad": 36 },
        {  "nombre": "Marco Verratti", "n_camiseta": 63, "altura": 196, "edad": 20 },
        {  "nombre": "Gianluigi Donnarumma", "n_camiseta": 75, "altura": 186, "edad": 20 }

    ]
},{
    "_id:": new ObjectId(),
    "nombre_eq": "Real Madrid",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "c",
    "jugadores": [
        {  "nombre": "Hazard", "n_camiseta": 1, "altura": 200, "edad": 40 },
        {  "nombre": "Kane", "n_camiseta": 16, "altura": 182, "edad": 27 },
        {  "nombre": "Mané", "n_camiseta": 28, "altura": 186, "edad": 25 },
        {  "nombre": "Samir Handanovič", "n_camiseta": 40, "altura": 186, "edad": 25 },
        {  "nombre": "Casemiro", "n_camiseta": 52, "altura": 171, "edad": 18 },
        {  "nombre": "Leonardo Bonucci", "n_camiseta": 64, "altura": 180, "edad": 27 },
        {  "nombre": "James Rodríguez", "n_camiseta": 76, "altura": 196, "edad": 31 }

    ]
}, {
    "_id:": new ObjectId(),
    "nombre_eq": "Tottenham",
    "edicion_torneo": "Liga de Campeones 2020",
    "fase": "clasificacion_grupos",
    "grupo": "c",
    "jugadores": [
        {  "nombre": "Modrić", "n_camiseta": 1, "altura": 286, "edad": 37 },
        {  "nombre": "Sergio Busquets", "n_camiseta": 21, "altura": 176, "edad": 27 },
        {  "nombre": "Marco Reus", "n_camiseta": 33, "altura": 194, "edad": 39 },
        {  "nombre": "Heung Min Son", "n_camiseta": 45, "altura": 176, "edad": 39 },
        {  "nombre": "Leroy Sané", "n_camiseta": 57, "altura": 193, "edad": 40 },
        {  "nombre": "Coutinho", "n_camiseta": 69, "altura": 178, "edad": 21 },
        {  "nombre": "De Ligt", "n_camiseta": 81, "altura": 170, "edad": 20 }

    ]
}
]
);


/*--------------------INSERTAR LOS EQUIPOS--------------------- */
/*------------------------------------------------------------- */
db.equipos.insertMany(
  [
      {
        "nombre_eq": "Atlético de Madrid ",
        "entrenador": "Diego Simeone",
        "sitio_web": "atleticodemadrid.com",
        "email": "atletic@email.com",
        "fundacion": "fundado el 26 de abril de 1903"
      },
      {
        "nombre_eq": "Barcelona",
        "entrenador": "Ronald Koeman",
        "sitio_web": "fcbarcelona.es",
        "email": "clubbarcelona@email.com",
        "fundacion": "29 de noviembre de 1899"
      },
      {
        "nombre_eq": "Bayern de Múnich",
        "entrenador": "Hans-Dieter Flick",
        "sitio_web": "fcbayern.com",
        "email": "clubbayer@email.com",
        "fundacion": "27 de febrero de 1900"
      },
      {
        "nombre_eq": "Chelsea",
        "entrenador": "Frank Lampard",
        "sitio_web": "chelseafc.com",
        "email": "clubchelsea@email.com",
        "fundacion": "10 de marzo de 1905"
      },
      {
        "nombre_eq": "Liverpool",
        "entrenador": "Jurgen Klop",
        "sitio_web": "liverpoolfc.com",
        "email": "liverpoll@email.com",
        "fundacion": "6 de junio de 1892"
      },
      {
        "nombre_eq": "Manchester City",
        "entrenador": "Pep Guardiola",
        "sitio_web": "es.mancity.com",
        "email": "manchestercity@email.com",
        "fundacion": "23 de noviembre de 1880"
      },
      {
        "nombre_eq": "Manchester United",
        "entrenador": "Ole Gunnar",
        "sitio_web": "manchesterunitedfc.com",
        "email": "manchesterunited@email.com",
        "fundacion": "5 de marzo de 1878"
      },
      {
        "nombre_eq": "Nápoles",
        "entrenador": "Gennaro Gattuso",
        "sitio_web": "clubdeportivonapoles.com",
        "email": "clubnapoles@email.com",
        "fundacion": "1926"
      },
      {
        "nombre_eq": "Piemonte Calcio",
        "entrenador": "Andrea Pirlo",
        "sitio_web": "juventus.com",
        "email": "juventus@email.com",
        "fundacion": "1 de noviembre de 1897"
      },
      {
        "nombre_eq": "PSG",
        "entrenador": "Tomas Tuchel",
        "sitio_web": "es.psg.fr",
        "email": "psg@email.com",
        "fundacion": "12 de agosto de 1970"
      },
      {
        "nombre_eq": "Real Madrid",
        "entrenador": "Zinedine Zidane",
        "sitio_web": "realmadrid.com",
        "email": "realmadrid@email.com",
        "fundacion": "6 de marzo de 1902"
      },
      {
        "nombre_eq": "Tottenham",
        "entrenador": "José Mourinho",
        "sitio_web": "tottenhamhospur.com",
        "email": "@email.com",
        "fundacion": "5 de septiembre de 1882"
      }
  ]
);



/*--------------------INSERTAR LOS JUGADORES--------------------- */
/*------------------------------------------------------------- */
db.jugadores.insertMany(
  [
  {  "nombre": "Oblak", "n_camiseta": 1, "altura": 185, "edad": 25 },
  {  "nombre": "N'Golo Kanté", "n_camiseta": 18, "altura": 177, "edad": 29 },
  {  "nombre": "Eriksen", "n_camiseta": 30, "altura": 178, "edad": 29 },
  {  "nombre": "Jordi Alba", "n_camiseta": 42, "altura": 176, "edad": 19 },
  {  "nombre": "Jan Vertonghen", "n_camiseta": 54, "altura": 191, "edad": 27 },
  {  "nombre": "Milan Škriniar", "n_camiseta": 66, "altura": 187, "edad": 36 },
  {  "nombre": "Varane", "n_camiseta": 78, "altura": 200, "edad": 33 },
  {  "nombre": "Messi", "n_camiseta": 1, "altura": 178, "edad": 35 },
  {  "nombre": "Sergio Agüero", "n_camiseta": 13, "altura": 174, "edad": 41 },
  {  "nombre": "Aubameyang", "n_camiseta": 25, "altura": 197, "edad": 29 },
  {  "nombre": "Godín", "n_camiseta": 37, "altura": 174, "edad": 41 },
  {  "nombre": "Aymeric Laporte", "n_camiseta": 49, "altura": 186, "edad": 23 },
  {  "nombre": "Marquinhos", "n_camiseta": 61, "altura": 183, "edad": 27 },
  {  "nombre": "Daniel Parejo", "n_camiseta": 73, "altura": 198, "edad": 31 },
  {  "nombre": "Mohamed Salah ", "n_camiseta": 1, "altura": 181, "edad": 39 },
  {  "nombre": "Griezmann", "n_camiseta": 20, "altura": 182, "edad":28 },
  {  "nombre": "Cavani", "n_camiseta": 32, "altura": 187, "edad": 37 },
  {  "nombre": "Fernandinho", "n_camiseta": 44, "altura": 184, "edad": 26 },
  {  "nombre": "Joshua Kimmich", "n_camiseta": 56, "altura": 181, "edad": 23 },
  {  "nombre": "Thomas Müller", "n_camiseta": 68, "altura": 186, "edad": 26 },
  {  "nombre": "Axel Witsel", "n_camiseta": 80, "altura": 183, "edad": 27 },
  {  "nombre": "Mbappé", "n_camiseta": 1, "altura": 192, "edad": 19 },
  {  "nombre": "De Gea", "n_camiseta": 23, "altura": 197, "edad":29 },
  {  "nombre": "David Silva", "n_camiseta": 35, "altura": 193, "edad": 27 },
  {  "nombre": "Bernardo Silva", "n_camiseta": 47, "altura": 181, "edad": 38 },
  {  "nombre": "Di María", "n_camiseta": 59, "altura": 192, "edad": 31 },
  {  "nombre": "Isco", "n_camiseta": 71, "altura": 182, "edad": 24 },
  {  "nombre": "Alex Sandro", "n_camiseta": 83, "altura": 18, "edad": 30 },
  {  "nombre": "Van Dijk", "n_camiseta": 1, "altura": 198, "edad": 29 },
  {  "nombre": "Alisson", "n_camiseta": 19, "altura": 196, "edad":35 },
  {  "nombre": "Pogba", "n_camiseta": 31, "altura": 197, "edad": 27 },
  {  "nombre": "Mats Hummels", "n_camiseta": 43, "altura": 193, "edad": 21 },
  {  "nombre": "Keylor Navas", "n_camiseta": 55, "altura": 191, "edad": 40 },
  {  "nombre": "Samuel Umtit", "n_camiseta": 67, "altura": 177, "edad": 28 },
  {  "nombre": "Andrew Robertson", "n_camiseta": 79, "altura": 168, "edad": 31 },
  {  "nombre": "Kevin de Bruyne", "n_camiseta": 1, "altura": 186, "edad": 37 },
  {  "nombre": "Kalidou Koulibaly", "n_camiseta": 17, "altura": 176, "edad":33 },
  {  "nombre": "Kroos", "n_camiseta": 29, "altura": 191, "edad": 30 },
  {  "nombre": "Benzema", "n_camiseta": 41, "altura": 170, "edad": 41 },
  {  "nombre": "Lorenzo Insigne", "n_camiseta": 53, "altura": 185, "edad": 21 },
  {  "nombre": "Rakitić", "n_camiseta": 65, "altura": 186, "edad": 39 },
  {  "nombre": "Frenkie de Jong", "n_camiseta": 77, "altura": 173, "edad": 25 },
  {  "nombre": "Sergio Ramos", "n_camiseta": 1, "altura": 178, "edad": 40 },
  {  "nombre": "Raheem Sterling", "n_camiseta": 24, "altura": 197, "edad":32 },
  {  "nombre": "Hugo Lloris", "n_camiseta": 36, "altura": 175, "edad": 22 },
  {  "nombre": "Thiago", "n_camiseta": 48, "altura": 179, "edad": 25 },
  {  "nombre": "Alexandre Lacazette", "n_camiseta": 60, "altura": 191, "edad": 36 },
  {  "nombre": "Wojciech Szczęsny", "n_camiseta": 72, "altura": 196, "edad": 35 },
  {  "nombre": "Niklas Süle", "n_camiseta": 84, "altura": 184, "edad": 32 },
  {  "nombre": "Ter Stegen", "n_camiseta": 10, "altura": 172, "edad": 39 },
  {  "nombre": "Luis Suárez", "n_camiseta": 22, "altura": 184, "edad":18 },
  {  "nombre": "Ederson", "n_camiseta": 34, "altura": 175, "edad": 41 },
  {  "nombre": "Toby Alderweireld", "n_camiseta": 46, "altura": 192, "edad": 32 },
  {  "nombre": "Pjanić", "n_camiseta": 58, "altura": 179, "edad": 32 },
  {  "nombre": "Ciro Immobile", "n_camiseta": 70, "altura": 175, "edad": 39 },
  {  "nombre": "Fabinho", "n_camiseta": 82, "altura": 184, "edad": 28 },
  {  "nombre": "Cristiano Ronaldo", "n_camiseta": 1, "altura": 183, "edad": 39 },
  {  "nombre": "Chiellini", "n_camiseta": 14, "altura": 200, "edad": 22 },
  {  "nombre": "Gerard Piqué", "n_camiseta": 26, "altura": 172, "edad": 23 },
  {  "nombre": "Dybala", "n_camiseta": 38, "altura": 182, "edad": 35 },
  {  "nombre": "Dries Mertens", "n_camiseta": 50, "altura": 168, "edad": 27 },
  {  "nombre": "Firmino", "n_camiseta": 62, "altura": 169, "edad": 41 },
  {  "nombre": "Marcelo", "n_camiseta": 74, "altura": 171, "edad": 22 },
  {  "nombre": "Neymar Jr", "n_camiseta": 3, "altura": 189, "edad": 19 },
  {  "nombre": "Lewandowski", "n_camiseta": 15, "altura": 200, "edad": 41 },
  {  "nombre": "Neuer", "n_camiseta": 27, "altura": 190, "edad": 40 },
  {  "nombre": "Courtois", "n_camiseta": 39, "altura": 189, "edad": 33 },
  {  "nombre": "Thiago Silva", "n_camiseta": 51, "altura": 191, "edad": 36 },
  {  "nombre": "Marco Verratti", "n_camiseta": 63, "altura": 196, "edad": 20 },
  {  "nombre": "Gianluigi Donnarumma", "n_camiseta": 75, "altura": 186, "edad": 20 },
  {  "nombre": "Hazard", "n_camiseta": 1, "altura": 200, "edad": 40 },
  {  "nombre": "Kane", "n_camiseta": 16, "altura": 182, "edad": 27 },
  {  "nombre": "Mané", "n_camiseta": 28, "altura": 186, "edad": 25 },
  {  "nombre": "Samir Handanovič", "n_camiseta": 40, "altura": 186, "edad": 25 },
  {  "nombre": "Casemiro", "n_camiseta": 52, "altura": 171, "edad": 18 },
  {  "nombre": "Leonardo Bonucci", "n_camiseta": 64, "altura": 180, "edad": 27 },
  {  "nombre": "James Rodríguez", "n_camiseta": 76, "altura": 196, "edad": 31 },
  {  "nombre": "Modrić", "n_camiseta": 1, "altura": 286, "edad": 37 },
  {  "nombre": "Sergio Busquets", "n_camiseta": 21, "altura": 176, "edad": 27 },
  {  "nombre": "Marco Reus", "n_camiseta": 33, "altura": 194, "edad": 39 },
  {  "nombre": "Heung Min Son", "n_camiseta": 45, "altura": 176, "edad": 39 },
  {  "nombre": "Leroy Sané", "n_camiseta": 57, "altura": 193, "edad": 40 },
  {  "nombre": "Coutinho", "n_camiseta": 69, "altura": 178, "edad": 21 },
  {  "nombre": "De Ligt", "n_camiseta": 81, "altura": 170, "edad": 20 }
]
);



/*--------------------INSERTAR LOS PARTIDOS-------------------- */
/*------------------------------------------------------------- */

db.partidos.insertMany(
[
    {
        "inicio": "12/11/2020 8:00",
        "fin": "12/11/2020 9:00",
        "torneo": "Liga de Campeones 2020",      
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
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "13/11/2020 9:00",
        "fin": "13/11/2020 10:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "a",
        "estadio": "Gillette Stadium",
        "ubicacion": "Foxborough, Estados Unidos",
        "arbitros": {
          "principal": "Carlos",
          "linea": "Carlos",
          "var": "Juan"
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
          "nombre": "Bayern de Múnich",
          "plantilla": [
            "Mohamed Salah ",
            "Griezmann",
            "Cavani",
            "Fernandinho",
            "Joshua Kimmich",
            "Thomas Müller",
            "Axel Witsel"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Atlético de Madrid ",
            "jugador": "N'Golo Kanté",
            "minuto": 26,
            "tipo_incidencia": "tiro",
            "detalles": "Tiro libre directo"
          }
        ]
      },
      {
        "inicio": "14/11/2020 10:00",
        "fin": "14/11/2020 11:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "a",
        "estadio": "Gillette Stadium",
        "ubicacion": "Foxborough, Estados Unidos",
        "arbitros": {
          "principal": "Juan",
          "linea": "Carlos",
          "var": "Simón"
        },
        "equipoLocal": {
          "nombre": "Bayern de Múnich",
          "plantilla": [
            "Mohamed Salah ",
            "Griezmann",
            "Cavani",
            "Fernandinho",
            "Joshua Kimmich",
            "Thomas Müller",
            "Axel Witsel"
          ]
        },
        "equipoVisitante": {
          "nombre": "Chelsea",
          "plantilla": [
            "Mbappé",
            "De Gea",
            "David Silva",
            "Bernardo Silva",
            "Di María",
            "Isco",
            "Alex Sandro"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Bayern de Múnich",
            "jugador": "Mohamed Salah ",
            "minuto": 71,
            "tipo_incidencia": "sustitucion",
            "detalles": "Mohamed Salah "
          },
          {
            "nombre_equipo": "Chelsea",
            "jugador": "David Silva",
            "minuto": 36,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "15/11/2020 11:00",
        "fin": "15/11/2020 12:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "a",
        "estadio": "Estadio Olímpico de Atenas",
        "ubicacion": "Atenas, Grecia",
        "arbitros": {
          "principal": "Daniel",
          "linea": "Daniel",
          "var": "Pedro"
        },
        "equipoLocal": {
          "nombre": "Chelsea",
          "plantilla": [
            "Mbappé",
            "De Gea",
            "David Silva",
            "Bernardo Silva",
            "Di María",
            "Isco",
            "Alex Sandro"
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
            "nombre_equipo": "Chelsea",
            "jugador": "Bernardo Silva",
            "minuto": 68,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "16/11/2020 12:00",
        "fin": "16/11/2020 13:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "b",
        "estadio": "Estadio Olímpico de Múnich",
        "ubicacion": "Munich, alemania",
        "arbitros": {
          "principal": "Daniel",
          "linea": "Jhon",
          "var": "Pepe"
        },
        "equipoLocal": {
          "nombre": "Liverpool",
          "plantilla": [
            "Van Dijk",
            "Alisson",
            "Pogba",
            "Mats Hummels",
            "Keylor Navas",
            "Samuel Umtit",
            "Andrew Robertson"
          ]
        },
        "equipoVisitante": {
          "nombre": "Manchester City",
          "plantilla": [
            "Kevin de Bruyne",
            "Kalidou Koulibaly",
            "Kroos",
            "Benzema",
            "Lorenzo Insigne",
            "Rakitić",
            "Frenkie de Jong"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Manchester City",
            "jugador": "Kalidou Koulibaly",
            "minuto": 87,
            "tipo_incidencia": "tiro",
            "detalles": "Tiro libre dentro del área penal"
          }
        ]
      },
      {
        "inicio": "17/11/2020 13:00",
        "fin": "17/11/2020 14:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "b",
        "estadio": "Estadio Olímpico de Múnich",
        "ubicacion": "Munich, alemania",
        "arbitros": {
          "principal": "Jhon",
          "linea": "Victor",
          "var": "Daniel"
        },
        "equipoLocal": {
          "nombre": "Liverpool",
          "plantilla": [
            "Van Dijk",
            "Alisson",
            "Pogba",
            "Mats Hummels",
            "Keylor Navas",
            "Samuel Umtit",
            "Andrew Robertson"
          ]
        },
        "equipoVisitante": {
          "nombre": "Nápoles",
          "plantilla": [
            "Ter Stegen",
            "Luis Suárez",
            "Ederson",
            "Toby Alderweireld",
            "Pjanić",
            "Ciro Immobile",
            "Fabinho"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Liverpool",
            "jugador": "Alisson",
            "minuto": 23,
            "tipo_incidencia": "falta",
            "detalles": "Ciro Immobile"
          }
        ]
      },
      {
        "inicio": "18/11/2020 14:00",
        "fin": "18/11/2020 15:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "b",
        "estadio": "Estadio Olímpico de Atenas",
        "ubicacion": "Atenas, Grecia",
        "arbitros": {
          "principal": "Pedro",
          "linea": "Jhon",
          "var": "Jhon"
        },
        "equipoLocal": {
          "nombre": "Manchester City",
          "plantilla": [
            "Kevin de Bruyne",
            "Kalidou Koulibaly",
            "Kroos",
            "Benzema",
            "Lorenzo Insigne",
            "Rakitić",
            "Frenkie de Jong"
          ]
        },
        "equipoVisitante": {
          "nombre": "Manchester United",
          "plantilla": [
            "Sergio Ramos",
            "Raheem Sterling",
            "Hugo Lloris",
            "Thiago",
            "Alexandre Lacazette",
            "Wojciech Szczęsny",
            "Niklas Süle"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Manchester City",
            "jugador": "Frenkie de Jong",
            "minuto": 21,
            "tipo_incidencia": "falta",
            "detalles": "Raheem Sterling"
          },
          {
            "nombre_equipo": "Manchester United",
            "jugador": "Wojciech Szczęsny",
            "minuto": 48,
            "tipo_incidencia": "falta",
            "detalles": "Lorenzo Insigne"
          },
          {
            "nombre_equipo": "Manchester United",
            "jugador": "Niklas Süle",
            "minuto": 68,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "19/11/2020 15:00",
        "fin": "19/11/2020 16:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "b",
        "estadio": "Estadio Krestovski",
        "ubicacion": "San Petersburgo, Rusia",
        "arbitros": {
          "principal": "Jhon",
          "linea": "Juan",
          "var": "Pedro"
        },
        "equipoLocal": {
          "nombre": "Manchester United",
          "plantilla": [
            "Sergio Ramos",
            "Raheem Sterling",
            "Hugo Lloris",
            "Thiago",
            "Alexandre Lacazette",
            "Wojciech Szczęsny",
            "Niklas Süle"
          ]
        },
        "equipoVisitante": {
          "nombre": "Nápoles",
          "plantilla": [
            "Ter Stegen",
            "Luis Suárez",
            "Ederson",
            "Toby Alderweireld",
            "Pjanić",
            "Ciro Immobile",
            "Fabinho"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Nápoles",
            "jugador": "Fabinho",
            "minuto": 66,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "20/11/2020 16:00",
        "fin": "20/11/2020 17:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "c",
        "estadio": "Estadio Olímpico de Múnich",
        "ubicacion": "Munich, alemania",
        "arbitros": {
          "principal": "Victor",
          "linea": "Simón",
          "var": "Roberto"
        },
        "equipoLocal": {
          "nombre": "Piemonte Calcio",
          "plantilla": [
            "Cristiano Ronaldo",
            "Chiellini",
            "Gerard Piqué",
            "Dybala",
            "Dries Mertens",
            "Firmino",
            "Marcelo"
          ]
        },
        "equipoVisitante": {
          "nombre": "PSG",
          "plantilla": [
            "Neymar Jr",
            "Lewandowski",
            "Neuer",
            "Courtois",
            "Thiago Silva",
            "Marco Verratti",
            "Gianluigi Donnarumma"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "PSG",
            "jugador": "Thiago Silva",
            "minuto": 72,
            "tipo_incidencia": "tiro",
            "detalles": "Tiro libre fuera del área de penal"
          },
          {
            "nombre_equipo": "PSG",
            "jugador": "Lewandowski",
            "minuto": 43,
            "tipo_incidencia": "tiro",
            "detalles": "Penal"
          }
        ]
      },
      {
        "inicio": "21/11/2020 17:00",
        "fin": "21/11/2020 18:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "c",
        "estadio": "Estadio Santiago Bernabéu",
        "ubicacion": "Madrid, España",
        "arbitros": {
          "principal": "Simón",
          "linea": "Pedro",
          "var": "Jhon"
        },
        "equipoLocal": {
          "nombre": "Real Madrid",
          "plantilla": [
            "Hazard",
            "Kane",
            "Mané",
            "Samir Handanovič",
            "Casemiro",
            "Leonardo Bonucci",
            "James Rodríguez"
          ]
        },
        "equipoVisitante": {
          "nombre": "Tottenham",
          "plantilla": [
            "Modrić",
            "Sergio Busquets",
            "Marco Reus",
            "Heung Min Son",
            "Leroy Sané",
            "Coutinho",
            "De Ligt"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Tottenham",
            "jugador": "De Ligt",
            "minuto": 44,
            "tipo_incidencia": "autogol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "22/11/2020 18:00",
        "fin": "22/11/2020 19:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "c",
        "estadio": "Estadio Olímpico de Múnich",
        "ubicacion": "Munich, alemania",
        "arbitros": {
          "principal": "Simón",
          "linea": "Carlos",
          "var": "Juan"
        },
        "equipoLocal": {
          "nombre": "PSG",
          "plantilla": [
            "Neymar Jr",
            "Lewandowski",
            "Neuer",
            "Courtois",
            "Thiago Silva",
            "Marco Verratti",
            "Gianluigi Donnarumma"
          ]
        },
        "equipoVisitante": {
          "nombre": "Real Madrid",
          "plantilla": [
            "Hazard",
            "Kane",
            "Mané",
            "Samir Handanovič",
            "Casemiro",
            "Leonardo Bonucci",
            "James Rodríguez"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "PSG",
            "jugador": "Neuer",
            "minuto": 11,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      },
      {
        "inicio": "23/11/2020 19:00",
        "fin": "23/11/2020 20:00",
        "torneo": "Liga de Campeones 2020",
        "fase": "clasificacion",
        "grupo": "c",
        "estadio": "Estadio Olímpico de Atenas",
        "ubicacion": "Atenas, Grecia",
        "arbitros": {
          "principal": "Jhon",
          "linea": "Roberto",
          "var": "Carlos"
        },
        "equipoLocal": {
          "nombre": "Tottenham",
          "plantilla": [
            "Modrić",
            "Sergio Busquets",
            "Marco Reus",
            "Heung Min Son",
            "Leroy Sané",
            "Coutinho",
            "De Ligt"
          ]
        },
        "equipoVisitante": {
          "nombre": "Piemonte Calcio",
          "plantilla": [
            "Cristiano Ronaldo",
            "Chiellini",
            "Gerard Piqué",
            "Dybala",
            "Dries Mertens",
            "Firmino",
            "Marcelo"
          ]
        },
        "incidencias": [
          {
            "nombre_equipo": "Tottenham",
            "jugador": "Marco Reus",
            "minuto": 12,
            "tipo_incidencia": "gol",
            "detalles": 1
          },
          {
            "nombre_equipo": "Tottenham",
            "jugador": "Marco Reus",
            "minuto": 22,
            "tipo_incidencia": "gol",
            "detalles": 1
          }
        ]
      }
]
);


/*--------------------INSERTAR LOS ESTADIOS-------------------- */
/*------------------------------------------------------------- */

db.estadios.insertMany(
  [
      {
        "nombre": "Estadio Allianz Arena",
        "ubicacion": "Munich, Alemania",       
        "aforo": 31297,
        "sitio_web": "fcbayern.com",
        "fundacion": "30 de mayo de 2005"
      },
      {
        "nombre": "Gillette Stadium",
        "ubicacion": "Foxborough, Estados Unidos",
        "aforo": 68756,
        "sitio_web": "stadiumgillette.com",
        "fundacion": "9 de septiembre de 2002"
      },
      {
        "nombre": "Estadio Olímpico de Atenas",
        "ubicacion": "Atenas, Grecia",
        "aforo": 39088,
        "sitio_web": "estadiumatenas.com",
        "fundacion": "30 de julio de 2004"
      },
      {
        "nombre": "Estadio Olímpico de Múnich",
        "ubicacion": "Munich, alemania",
        "aforo": 63062,
        "sitio_web": "estadiumolimpicomunich.com",
        "fundacion": "26 de mayo de 1972"
      },
      {
        "nombre": "Estadio Krestovski",
        "ubicacion": "San Petersburgo, Rusia",
        "aforo": 70000,
        "sitio_web": "estadiumKrestovski.com",
        "fundacion": "22 de abril de 2017"
      },
      {
        "nombre": "Estadio Santiago Bernabéu",
        "ubicacion": "Madrid, España",
        "aforo": 81044,
        "sitio_web": "estadiumbernabeu.com",
        "fundacion": "14 de diciembre de 1947"
      },
      {
        "nombre": "Estadio Camp Nou",
        "ubicacion": "Barcelona, España",
        "aforo": 99354,
        "sitio_web": "estadiumcampnou.com",
        "fundacion": "24 de septiembre de 1957"
      }
  ]
);



/*------------INSERTAR LOS RESULTADOS DEL TORNEO-----------------*/
/*---------------------------------------------------------------*/

db.torneo.insert({
    "edicion": "Liga de Campeones 2020",
    "fases": [{
        nombre: "clasificacion_grupos",
        grupos: [
                        { nombre: "a", Posicion: "1", Equipo: "Chelsea", PG: 2, PE: 0, PP: 0, GF: 2,  GC: 0,  GD: 2, Puntos: 6 },
                        { nombre: "a", Posicion: "2", Equipo: "Atlético de Madrid ", PG: 1, PE: 1, PP: 0, GF: 1,  GC: 0,  GD: 1, Puntos: 4 },
                        { nombre: "a", Posicion: "3", Equipo: "Bayern de Múnich", PG: 0, PE: 1, PP: 1, GF: 0,  GC: 1,  GD: -1, Puntos: 1 },
                        { nombre: "a", Posicion: "4", Equipo: "Barcelona", PG: 0, PE: 0, PP: 2, GF: 0,  GC: 2,  GD: -2, Puntos: 0 },
                        { nombre: "b", Posicion: "1", Equipo: "Nápoles", PG: 1, PE: 1, PP: 0, GF: 1,  GC: 0,  GD: 1, Puntos: 4 },
                        { nombre: "b", Posicion: "2", Equipo: "Manchester United", PG: 1, PE: 0, PP: 1, GF: 1,  GC: 1,  GD: 0, Puntos: 3 },
                        { nombre: "b", Posicion: "3", Equipo: "Liverpool", PG: 0, PE: 2, PP: 0, GF: 0,  GC: 0,  GD: 0, Puntos: 2 },
                        { nombre: "b", Posicion: "4", Equipo: "Manchester City", PG: 0, PE: 1, PP: 1, GF: 0,  GC: 1,  GD: -1, Puntos: 1 },
                        { nombre: "c", Posicion: "1", Equipo: "Tottenham", PG: 1, PE: 1, PP: 0, GF: 2,  GC: 0,  GD: 2, Puntos: 4 },
                        { nombre: "c", Posicion: "2", Equipo: "PSG", PG: 1, PE: 1, PP: 0, GF: 1,  GC: 0,  GD: 1, Puntos: 4 },
                        { nombre: "c", Posicion: "3", Equipo: "Piemonte Calcio", PG: 0, PE: 2, PP: 0, GF: 0,  GC: 0,  GD: 0, Puntos: 2 },
                        { nombre: "c", Posicion: "4", Equipo: "Real Madrid", PG: 0, PE: 1, PP: 1, GF: 0,  GC: 1,  GD: -1, Puntos: 1 }
        ]
    }]
});