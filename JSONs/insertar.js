/*--------------------INSERTAR LOS PLANTILLA--------------------- */
/*------------------------------------------------------------- */
db.plantillas.insertMany(
  [
    {
      "nombre_eq": "Atlético de Madrid ",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "a",
      "jugadores": [
        { "nombre": "Oblak", "n_camiseta": NumberInt(1), "altura": NumberInt(185), "edad": NumberInt(25) },
        { "nombre": "N'Golo Kanté", "n_camiseta": NumberInt(18), "altura": NumberInt(177), "edad": NumberInt(29) },
        { "nombre": "Eriksen", "n_camiseta": NumberInt(30), "altura": NumberInt(178), "edad": NumberInt(29) },
        { "nombre": "Jordi Alba", "n_camiseta": NumberInt(42), "altura": NumberInt(176), "edad": NumberInt(19) },
        { "nombre": "Jan Vertonghen", "n_camiseta": NumberInt(54), "altura": NumberInt(191), "edad": NumberInt(27) },
        { "nombre": "Milan Škriniar", "n_camiseta": NumberInt(66), "altura": NumberInt(187), "edad": NumberInt(36) },
        { "nombre": "Varane", "n_camiseta": NumberInt(78), "altura": NumberInt(200), "edad": NumberInt(33) }
      ]
    }, {
      "nombre_eq": "Barcelona",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "a",
      "jugadores": [
        { "nombre": "Messi", "n_camiseta": NumberInt(1), "altura": NumberInt(178), "edad": NumberInt(35) },
        { "nombre": "Sergio Agüero", "n_camiseta": NumberInt(13), "altura": NumberInt(174), "edad": NumberInt(41) },
        { "nombre": "Aubameyang", "n_camiseta": NumberInt(25), "altura": NumberInt(197), "edad": NumberInt(29) },
        { "nombre": "Godín", "n_camiseta": NumberInt(37), "altura": NumberInt(174), "edad": NumberInt(41) },
        { "nombre": "Aymeric Laporte", "n_camiseta": NumberInt(49), "altura": NumberInt(186), "edad": NumberInt(23) },
        { "nombre": "Marquinhos", "n_camiseta": NumberInt(61), "altura": NumberInt(183), "edad": NumberInt(27) },
        { "nombre": "Daniel Parejo", "n_camiseta": NumberInt(73), "altura": NumberInt(198), "edad": NumberInt(31) }
      ]
    }, {
      "nombre_eq": "Bayern de Múnich",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "a",
      "jugadores": [
        { "nombre": "Mohamed Salah ", "n_camiseta": NumberInt(1), "altura": NumberInt(181), "edad": NumberInt(39) },
        { "nombre": "Griezmann", "n_camiseta": NumberInt(20), "altura": NumberInt(182), "edad": NumberInt(28) },
        { "nombre": "Cavani", "n_camiseta": NumberInt(32), "altura": NumberInt(187), "edad": NumberInt(37) },
        { "nombre": "Fernandinho", "n_camiseta": NumberInt(44), "altura": NumberInt(184), "edad": NumberInt(26) },
        { "nombre": "Joshua Kimmich", "n_camiseta": NumberInt(56), "altura": NumberInt(181), "edad": NumberInt(23) },
        { "nombre": "Thomas Müller", "n_camiseta": NumberInt(68), "altura": NumberInt(186), "edad": NumberInt(26) },
        { "nombre": "Axel Witsel", "n_camiseta": NumberInt(80), "altura": NumberInt(183), "edad": NumberInt(27) }

      ]
    }, {
      "nombre_eq": "Chelsea",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "a",
      "jugadores": [
        { "nombre": "Mbappé", "n_camiseta": NumberInt(1), "altura": NumberInt(192), "edad": NumberInt(19) },
        { "nombre": "De Gea", "n_camiseta": NumberInt(23), "altura": NumberInt(197), "edad": NumberInt(29) },
        { "nombre": "David Silva", "n_camiseta": NumberInt(35), "altura": NumberInt(193), "edad": NumberInt(27) },
        { "nombre": "Bernardo Silva", "n_camiseta": NumberInt(47), "altura": NumberInt(181), "edad": NumberInt(38) },
        { "nombre": "Di María", "n_camiseta": NumberInt(59), "altura": NumberInt(192), "edad": NumberInt(31) },
        { "nombre": "Isco", "n_camiseta": NumberInt(71), "altura": NumberInt(182), "edad": NumberInt(24) },
        { "nombre": "Alex Sandro", "n_camiseta": NumberInt(83), "altura": NumberInt(180), "edad": NumberInt(30) }
      ]
    }, {
      "nombre_eq": "Liverpool",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "b",
      "jugadores": [
        { "nombre": "Van Dijk", "n_camiseta": NumberInt(1), "altura": NumberInt(198), "edad": NumberInt(29) },
        { "nombre": "Alisson", "n_camiseta": NumberInt(19), "altura": NumberInt(196), "edad": NumberInt(35) },
        { "nombre": "Pogba", "n_camiseta": NumberInt(31), "altura": NumberInt(197), "edad": NumberInt(27) },
        { "nombre": "Mats Hummels", "n_camiseta": NumberInt(43), "altura": NumberInt(193), "edad": NumberInt(21) },
        { "nombre": "Keylor Navas", "n_camiseta": NumberInt(55), "altura": NumberInt(191), "edad": NumberInt(40) },
        { "nombre": "Samuel Umtit", "n_camiseta": NumberInt(67), "altura": NumberInt(177), "edad": NumberInt(28) },
        { "nombre": "Andrew Robertson", "n_camiseta": NumberInt(79), "altura": NumberInt(168), "edad": NumberInt(31) }
      ]
    }, {
      "nombre_eq": "Manchester City",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "b",
      "jugadores": [
        { "nombre": "Kevin de Bruyne", "n_camiseta": NumberInt(1), "altura": NumberInt(186), "edad": NumberInt(37) },
        { "nombre": "Kalidou Koulibaly", "n_camiseta": NumberInt(17), "altura": NumberInt(176), "edad": NumberInt(33) },
        { "nombre": "Kroos", "n_camiseta": NumberInt(29), "altura": NumberInt(191), "edad": NumberInt(30) },
        { "nombre": "Benzema", "n_camiseta": NumberInt(41), "altura": NumberInt(170), "edad": NumberInt(41) },
        { "nombre": "Lorenzo Insigne", "n_camiseta": NumberInt(53), "altura": NumberInt(185), "edad": NumberInt(21) },
        { "nombre": "Rakitić", "n_camiseta": NumberInt(65), "altura": NumberInt(186), "edad": NumberInt(39) },
        { "nombre": "Frenkie de Jong", "n_camiseta": NumberInt(77), "altura": NumberInt(173), "edad": NumberInt(25) }
      ]
    }, {
      "nombre_eq": "Manchester United",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "b",
      "jugadores": [
        { "nombre": "Sergio Ramos", "n_camiseta": NumberInt(1), "altura": NumberInt(178), "edad": NumberInt(40) },
        { "nombre": "Raheem Sterling", "n_camiseta": NumberInt(24), "altura": NumberInt(197), "edad": NumberInt(32) },
        { "nombre": "Hugo Lloris", "n_camiseta": NumberInt(36), "altura": NumberInt(175), "edad": NumberInt(22) },
        { "nombre": "Thiago", "n_camiseta": NumberInt(48), "altura": NumberInt(179), "edad": NumberInt(25) },
        { "nombre": "Alexandre Lacazette", "n_camiseta": NumberInt(60), "altura": NumberInt(191), "edad": NumberInt(36) },
        { "nombre": "Wojciech Szczęsny", "n_camiseta": NumberInt(72), "altura": NumberInt(196), "edad": NumberInt(35) },
        { "nombre": "Niklas Süle", "n_camiseta": NumberInt(84), "altura": NumberInt(184), "edad": NumberInt(32) }
      ]
    }, {
      "nombre_eq": "Nápoles",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "b",
      "jugadores": [
        { "nombre": "Ter Stegen", "n_camiseta": NumberInt(10), "altura": NumberInt(172), "edad": NumberInt(39) },
        { "nombre": "Luis Suárez", "n_camiseta": NumberInt(22), "altura": NumberInt(184), "edad": NumberInt(18) },
        { "nombre": "Ederson", "n_camiseta": NumberInt(34), "altura": NumberInt(175), "edad": NumberInt(41) },
        { "nombre": "Toby Alderweireld", "n_camiseta": NumberInt(46), "altura": NumberInt(192), "edad": NumberInt(32) },
        { "nombre": "Pjanić", "n_camiseta": NumberInt(58), "altura": NumberInt(179), "edad": NumberInt(32) },
        { "nombre": "Ciro Immobile", "n_camiseta": NumberInt(70), "altura": NumberInt(175), "edad": NumberInt(39) },
        { "nombre": "Fabinho", "n_camiseta": NumberInt(82), "altura": NumberInt(184), "edad": NumberInt(28) }
      ]
    }, {
      "nombre_eq": "Piemonte Calcio",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "c",
      "jugadores": [
        { "nombre": "Cristiano Ronaldo", "n_camiseta": NumberInt(1), "altura": NumberInt(183), "edad": NumberInt(39) },
        { "nombre": "Chiellini", "n_camiseta": NumberInt(14), "altura": NumberInt(200), "edad": NumberInt(22) },
        { "nombre": "Gerard Piqué", "n_camiseta": NumberInt(26), "altura": NumberInt(172), "edad": NumberInt(23) },
        { "nombre": "Dybala", "n_camiseta": NumberInt(38), "altura": NumberInt(182), "edad": NumberInt(35) },
        { "nombre": "Dries Mertens", "n_camiseta": NumberInt(50), "altura": NumberInt(168), "edad": NumberInt(27) },
        { "nombre": "Firmino", "n_camiseta": NumberInt(62), "altura": NumberInt(169), "edad": NumberInt(41) },
        { "nombre": "Marcelo", "n_camiseta": NumberInt(74), "altura": NumberInt(171), "edad": NumberInt(22) }
      ]
    }, {
      "nombre_eq": "PSG",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "c",
      "jugadores": [
        { "nombre": "Neymar Jr", "n_camiseta": NumberInt(3), "altura": NumberInt(189), "edad": NumberInt(19) },
        { "nombre": "Lewandowski", "n_camiseta": NumberInt(15), "altura": NumberInt(200), "edad": NumberInt(41) },
        { "nombre": "Neuer", "n_camiseta": NumberInt(27), "altura": NumberInt(190), "edad": NumberInt(40) },
        { "nombre": "Courtois", "n_camiseta": NumberInt(39), "altura": NumberInt(189), "edad": NumberInt(33) },
        { "nombre": "Thiago Silva", "n_camiseta": NumberInt(51), "altura": NumberInt(191), "edad": NumberInt(36) },
        { "nombre": "Marco Verratti", "n_camiseta": NumberInt(63), "altura": NumberInt(196), "edad": NumberInt(20) },
        { "nombre": "Gianluigi Donnarumma", "n_camiseta": NumberInt(75), "altura": NumberInt(186), "edad": NumberInt(20) }
      ]
    }, {
      "nombre_eq": "Real Madrid",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "c",
      "jugadores": [
        { "nombre": "Hazard", "n_camiseta": NumberInt(1), "altura": NumberInt(200), "edad": NumberInt(40) },
        { "nombre": "Kane", "n_camiseta": NumberInt(16), "altura": NumberInt(182), "edad": NumberInt(27) },
        { "nombre": "Mané", "n_camiseta": NumberInt(28), "altura": NumberInt(186), "edad": NumberInt(25) },
        { "nombre": "Samir Handanovič", "n_camiseta": NumberInt(40), "altura": NumberInt(186), "edad": NumberInt(25) },
        { "nombre": "Casemiro", "n_camiseta": NumberInt(52), "altura": NumberInt(171), "edad": NumberInt(18) },
        { "nombre": "Leonardo Bonucci", "n_camiseta": NumberInt(64), "altura": NumberInt(180), "edad": NumberInt(27) },
        { "nombre": "James Rodríguez", "n_camiseta": NumberInt(76), "altura": NumberInt(196), "edad": NumberInt(31) }
      ]
    }, {
      "nombre_eq": "Tottenham",
      "edicion_torneo": "Liga de Campeones 2020",
      "fase": "clasificacion_grupos",
      "grupo": "c",
      "jugadores": [
        { "nombre": "Modrić", "n_camiseta": NumberInt(1), "altura": NumberInt(286), "edad": NumberInt(37) },
        { "nombre": "Sergio Busquets", "n_camiseta": NumberInt(21), "altura": NumberInt(176), "edad": NumberInt(27) },
        { "nombre": "Marco Reus", "n_camiseta": NumberInt(33), "altura": NumberInt(194), "edad": NumberInt(39) },
        { "nombre": "Heung Min Son", "n_camiseta": NumberInt(45), "altura": NumberInt(176), "edad": NumberInt(39) },
        { "nombre": "Leroy Sané", "n_camiseta": NumberInt(57), "altura": NumberInt(193), "edad": NumberInt(40) },
        { "nombre": "Coutinho", "n_camiseta": NumberInt(69), "altura": NumberInt(178), "edad": NumberInt(21) },
        { "nombre": "De Ligt", "n_camiseta": NumberInt(81), "altura": NumberInt(170), "edad": NumberInt(20) }
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
      "fundado": "fundado el 26 de abril de 1903"
    },
    {
      "nombre_eq": "Barcelona",
      "entrenador": "Ronald Koeman",
      "sitio_web": "fcbarcelona.es",
      "email": "clubbarcelona@email.com",
      "fundado": "29 de noviembre de 1899"
    },
    {
      "nombre_eq": "Bayern de Múnich",
      "entrenador": "Hans-Dieter Flick",
      "sitio_web": "fcbayern.com",
      "email": "clubbayer@email.com",
      "fundado": "27 de febrero de 1900"
    },
    {
      "nombre_eq": "Chelsea",
      "entrenador": "Frank Lampard",
      "sitio_web": "chelseafc.com",
      "email": "clubchelsea@email.com",
      "fundado": "10 de marzo de 1905"
    },
    {
      "nombre_eq": "Liverpool",
      "entrenador": "Jurgen Klop",
      "sitio_web": "liverpoolfc.com",
      "email": "liverpoll@email.com",
      "fundado": "6 de junio de 1892"
    },
    {
      "nombre_eq": "Manchester City",
      "entrenador": "Pep Guardiola",
      "sitio_web": "es.mancity.com",
      "email": "manchestercity@email.com",
      "fundado": "23 de noviembre de 1880"
    },
    {
      "nombre_eq": "Manchester United",
      "entrenador": "Ole Gunnar",
      "sitio_web": "manchesterunitedfc.com",
      "email": "manchesterunited@email.com",
      "fundado": "5 de marzo de 1878"
    },
    {
      "nombre_eq": "Nápoles",
      "entrenador": "Gennaro Gattuso",
      "sitio_web": "clubdeportivonapoles.com",
      "email": "clubnapoles@email.com",
      "fundado": "1 de noviembre 1926"
    },
    {
      "nombre_eq": "Piemonte Calcio",
      "entrenador": "Andrea Pirlo",
      "sitio_web": "juventus.com",
      "email": "juventus@email.com",
      "fundado": "1 de noviembre de 1897"
    },
    {
      "nombre_eq": "PSG",
      "entrenador": "Tomas Tuchel",
      "sitio_web": "es.psg.fr",
      "email": "psg@email.com",
      "fundado": "12 de agosto de 1970"
    },
    {
      "nombre_eq": "Real Madrid",
      "entrenador": "Zinedine Zidane",
      "sitio_web": "realmadrid.com",
      "email": "realmadrid@email.com",
      "fundado": "6 de marzo de 1902"
    },
    {
      "nombre_eq": "Tottenham",
      "entrenador": "José Mourinho",
      "sitio_web": "tottenhamhospur.com",
      "email": "@email.com",
      "fundado": "5 de septiembre de 1882"
    }
  ]
);



/*--------------------INSERTAR LOS JUGADORES--------------------- */
/*------------------------------------------------------------- */
db.jugadores.insertMany(
  [
    { "nombre": "Oblak", "n_camiseta": NumberInt(1), "altura": NumberInt(185), "edad": NumberInt(25) },
    { "nombre": "N'Golo Kanté", "n_camiseta": NumberInt(18), "altura": NumberInt(177), "edad": NumberInt(29) },
    { "nombre": "Eriksen", "n_camiseta": NumberInt(30), "altura": NumberInt(178), "edad": NumberInt(29) },
    { "nombre": "Jordi Alba", "n_camiseta": NumberInt(42), "altura": NumberInt(176), "edad": NumberInt(19) },
    { "nombre": "Jan Vertonghen", "n_camiseta": NumberInt(54), "altura": NumberInt(191), "edad": NumberInt(27) },
    { "nombre": "Milan Škriniar", "n_camiseta": NumberInt(66), "altura": NumberInt(187), "edad": NumberInt(36) },
    { "nombre": "Varane", "n_camiseta": NumberInt(78), "altura": NumberInt(200), "edad": NumberInt(33) },
    { "nombre": "Messi", "n_camiseta": NumberInt(1), "altura": NumberInt(178), "edad": NumberInt(35) },
    { "nombre": "Sergio Agüero", "n_camiseta": NumberInt(13), "altura": NumberInt(174), "edad": NumberInt(41) },
    { "nombre": "Aubameyang", "n_camiseta": NumberInt(25), "altura": NumberInt(197), "edad": NumberInt(29) },
    { "nombre": "Godín", "n_camiseta": NumberInt(37), "altura": NumberInt(174), "edad": NumberInt(41) },
    { "nombre": "Aymeric Laporte", "n_camiseta": NumberInt(49), "altura": NumberInt(186), "edad": NumberInt(23) },
    { "nombre": "Marquinhos", "n_camiseta": NumberInt(61), "altura": NumberInt(183), "edad": NumberInt(27) },
    { "nombre": "Daniel Parejo", "n_camiseta": NumberInt(73), "altura": NumberInt(198), "edad": NumberInt(31) },
    { "nombre": "Mohamed Salah ", "n_camiseta": NumberInt(1), "altura": NumberInt(181), "edad": NumberInt(39) },
    { "nombre": "Griezmann", "n_camiseta": NumberInt(20), "altura": NumberInt(182), "edad": NumberInt(28) },
    { "nombre": "Cavani", "n_camiseta": NumberInt(32), "altura": NumberInt(187), "edad": NumberInt(37) },
    { "nombre": "Fernandinho", "n_camiseta": NumberInt(44), "altura": NumberInt(184), "edad": NumberInt(26) },
    { "nombre": "Joshua Kimmich", "n_camiseta": NumberInt(56), "altura": NumberInt(181), "edad": NumberInt(23) },
    { "nombre": "Thomas Müller", "n_camiseta": NumberInt(68), "altura": NumberInt(186), "edad": NumberInt(26) },
    { "nombre": "Axel Witsel", "n_camiseta": NumberInt(80), "altura": NumberInt(183), "edad": NumberInt(27) },
    { "nombre": "Mbappé", "n_camiseta": NumberInt(1), "altura": NumberInt(192), "edad": NumberInt(19) },
    { "nombre": "De Gea", "n_camiseta": NumberInt(23), "altura": NumberInt(197), "edad": NumberInt(29) },
    { "nombre": "David Silva", "n_camiseta": NumberInt(35), "altura": NumberInt(193), "edad": NumberInt(27) },
    { "nombre": "Bernardo Silva", "n_camiseta": NumberInt(47), "altura": NumberInt(181), "edad": NumberInt(38) },
    { "nombre": "Di María", "n_camiseta": NumberInt(59), "altura": NumberInt(192), "edad": NumberInt(31) },
    { "nombre": "Isco", "n_camiseta": NumberInt(71), "altura": NumberInt(182), "edad": NumberInt(24) },
    { "nombre": "Alex Sandro", "n_camiseta": NumberInt(83), "altura": NumberInt(180), "edad": NumberInt(30) },
    { "nombre": "Van Dijk", "n_camiseta": NumberInt(1), "altura": NumberInt(198), "edad": NumberInt(29) },
    { "nombre": "Alisson", "n_camiseta": NumberInt(19), "altura": NumberInt(196), "edad": NumberInt(5) },
    { "nombre": "Pogba", "n_camiseta": NumberInt(31), "altura": NumberInt(197), "edad": NumberInt(27) },
    { "nombre": "Mats Hummels", "n_camiseta": NumberInt(43), "altura": NumberInt(193), "edad": NumberInt(21) },
    { "nombre": "Keylor Navas", "n_camiseta": NumberInt(55), "altura": NumberInt(191), "edad": NumberInt(40) },
    { "nombre": "Samuel Umtit", "n_camiseta": NumberInt(67), "altura": NumberInt(177), "edad": NumberInt(28) },
    { "nombre": "Andrew Robertson", "n_camiseta": NumberInt(79), "altura": NumberInt(168), "edad": NumberInt(31) },
    { "nombre": "Kevin de Bruyne", "n_camiseta": NumberInt(1), "altura": NumberInt(186), "edad": NumberInt(37) },
    { "nombre": "Kalidou Koulibaly", "n_camiseta": NumberInt(17), "altura": NumberInt(176), "edad": NumberInt(33) },
    { "nombre": "Kroos", "n_camiseta": NumberInt(29), "altura": NumberInt(191), "edad": NumberInt(30) },
    { "nombre": "Benzema", "n_camiseta": NumberInt(41), "altura": NumberInt(170), "edad": NumberInt(41) },
    { "nombre": "Lorenzo Insigne", "n_camiseta": NumberInt(53), "altura": NumberInt(185), "edad": NumberInt(21) },
    { "nombre": "Rakitić", "n_camiseta": NumberInt(65), "altura": NumberInt(186), "edad": NumberInt(39) },
    { "nombre": "Frenkie de Jong", "n_camiseta": NumberInt(77), "altura": NumberInt(173), "edad": NumberInt(25) },
    { "nombre": "Sergio Ramos", "n_camiseta": NumberInt(1), "altura": NumberInt(178), "edad": NumberInt(40) },
    { "nombre": "Raheem Sterling", "n_camiseta": NumberInt(24), "altura": NumberInt(197), "edad": NumberInt(32) },
    { "nombre": "Hugo Lloris", "n_camiseta": NumberInt(36), "altura": NumberInt(175), "edad": NumberInt(22) },
    { "nombre": "Thiago", "n_camiseta": NumberInt(48), "altura": NumberInt(179), "edad": NumberInt(25) },
    { "nombre": "Alexandre Lacazette", "n_camiseta": NumberInt(60), "altura": NumberInt(191), "edad": NumberInt(36) },
    { "nombre": "Wojciech Szczęsny", "n_camiseta": NumberInt(72), "altura": NumberInt(196), "edad": NumberInt(35) },
    { "nombre": "Niklas Süle", "n_camiseta": NumberInt(84), "altura": NumberInt(184), "edad": NumberInt(32) },
    { "nombre": "Ter Stegen", "n_camiseta": NumberInt(10), "altura": NumberInt(172), "edad": NumberInt(39) },
    { "nombre": "Luis Suárez", "n_camiseta": NumberInt(22), "altura": NumberInt(184), "edad": NumberInt(18) },
    { "nombre": "Ederson", "n_camiseta": NumberInt(34), "altura": NumberInt(175), "edad": NumberInt(41) },
    { "nombre": "Toby Alderweireld", "n_camiseta": NumberInt(46), "altura": NumberInt(192), "edad": NumberInt(32) },
    { "nombre": "Pjanić", "n_camiseta": NumberInt(58), "altura": NumberInt(179), "edad": NumberInt(32) },
    { "nombre": "Ciro Immobile", "n_camiseta": NumberInt(70), "altura": NumberInt(175), "edad": NumberInt(39) },
    { "nombre": "Fabinho", "n_camiseta": NumberInt(82), "altura": NumberInt(184), "edad": NumberInt(28) },
    { "nombre": "Cristiano Ronaldo", "n_camiseta": NumberInt(1), "altura": NumberInt(183), "edad": NumberInt(39) },
    { "nombre": "Chiellini", "n_camiseta": NumberInt(14), "altura": NumberInt(200), "edad": NumberInt(22) },
    { "nombre": "Gerard Piqué", "n_camiseta": NumberInt(26), "altura": NumberInt(172), "edad": NumberInt(23) },
    { "nombre": "Dybala", "n_camiseta": NumberInt(38), "altura": NumberInt(182), "edad": NumberInt(35) },
    { "nombre": "Dries Mertens", "n_camiseta": NumberInt(50), "altura": NumberInt(168), "edad": NumberInt(27) },
    { "nombre": "Firmino", "n_camiseta": NumberInt(62), "altura": NumberInt(169), "edad": NumberInt(41) },
    { "nombre": "Marcelo", "n_camiseta": NumberInt(74), "altura": NumberInt(171), "edad": NumberInt(22) },
    { "nombre": "Neymar Jr", "n_camiseta": NumberInt(3), "altura": NumberInt(189), "edad": NumberInt(19) },
    { "nombre": "Lewandowski", "n_camiseta": NumberInt(15), "altura": NumberInt(200), "edad": NumberInt(41) },
    { "nombre": "Neuer", "n_camiseta": NumberInt(27), "altura": NumberInt(190), "edad": NumberInt(40) },
    { "nombre": "Courtois", "n_camiseta": NumberInt(39), "altura": NumberInt(189), "edad": NumberInt(33) },
    { "nombre": "Thiago Silva", "n_camiseta": NumberInt(51), "altura": NumberInt(191), "edad": NumberInt(36) },
    { "nombre": "Marco Verratti", "n_camiseta": NumberInt(63), "altura": NumberInt(196), "edad": NumberInt(20) },
    { "nombre": "Gianluigi Donnarumma", "n_camiseta": NumberInt(75), "altura": NumberInt(186), "edad": NumberInt(20) },
    { "nombre": "Hazard", "n_camiseta": NumberInt(1), "altura": NumberInt(200), "edad": NumberInt(40) },
    { "nombre": "Kane", "n_camiseta": NumberInt(16), "altura": NumberInt(182), "edad": NumberInt(27) },
    { "nombre": "Mané", "n_camiseta": NumberInt(28), "altura": NumberInt(186), "edad": NumberInt(25) },
    { "nombre": "Samir Handanovič", "n_camiseta": NumberInt(40), "altura": NumberInt(186), "edad": NumberInt(25) },
    { "nombre": "Casemiro", "n_camiseta": NumberInt(52), "altura": NumberInt(171), "edad": NumberInt(18) },
    { "nombre": "Leonardo Bonucci", "n_camiseta": NumberInt(64), "altura": NumberInt(180), "edad": NumberInt(27) },
    { "nombre": "James Rodríguez", "n_camiseta": NumberInt(76), "altura": NumberInt(196), "edad": NumberInt(31) },
    { "nombre": "Modrić", "n_camiseta": NumberInt(1), "altura": NumberInt(286), "edad": NumberInt(37) },
    { "nombre": "Sergio Busquets", "n_camiseta": NumberInt(21), "altura": NumberInt(176), "edad": NumberInt(27) },
    { "nombre": "Marco Reus", "n_camiseta": NumberInt(33), "altura": NumberInt(194), "edad": NumberInt(39) },
    { "nombre": "Heung Min Son", "n_camiseta": NumberInt(45), "altura": NumberInt(176), "edad": NumberInt(39) },
    { "nombre": "Leroy Sané", "n_camiseta": NumberInt(57), "altura": NumberInt(193), "edad": NumberInt(40) },
    { "nombre": "Coutinho", "n_camiseta": NumberInt(69), "altura": NumberInt(178), "edad": NumberInt(21) },
    { "nombre": "De Ligt", "n_camiseta": NumberInt(81), "altura": NumberInt(170), "edad": NumberInt(20) }
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
          "minuto": NumberInt(6),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(26),
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
          "minuto": NumberInt(71),
          "tipo_incidencia": "sustitucion",
          "detalles": "Mohamed Salah "
        },
        {
          "nombre_equipo": "Chelsea",
          "jugador": "David Silva",
          "minuto": NumberInt(36),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(68),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(87),
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
          "minuto": NumberInt(23),
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
          "minuto": NumberInt(21),
          "tipo_incidencia": "falta",
          "detalles": "Raheem Sterling"
        },
        {
          "nombre_equipo": "Manchester United",
          "jugador": "Wojciech Szczęsny",
          "minuto": NumberInt(48),
          "tipo_incidencia": "falta",
          "detalles": "Lorenzo Insigne"
        },
        {
          "nombre_equipo": "Manchester United",
          "jugador": "Niklas Süle",
          "minuto": NumberInt(68),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(66),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(72),
          "tipo_incidencia": "tiro",
          "detalles": "Tiro libre fuera del área de penal"
        },
        {
          "nombre_equipo": "PSG",
          "jugador": "Lewandowski",
          "minuto": NumberInt(43),
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
          "minuto": NumberInt(44),
          "tipo_incidencia": "autogol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(11),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
          "minuto": NumberInt(12),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
        },
        {
          "nombre_equipo": "Tottenham",
          "jugador": "Marco Reus",
          "minuto": NumberInt(22),
          "tipo_incidencia": "gol",
          "detalles": NumberInt(1)
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
      "aforo": NumberInt(31297),
      "sitio_web": "fcbayern.com",
      "fundado": "30 de mayo de 2005"
    },
    {
      "nombre": "Gillette Stadium",
      "ubicacion": "Foxborough, Estados Unidos",
      "aforo": NumberInt(68756),
      "sitio_web": "stadiumgillette.com",
      "fundado": "9 de septiembre de 2002"
    },
    {
      "nombre": "Estadio Olímpico de Atenas",
      "ubicacion": "Atenas, Grecia",
      "aforo": NumberInt(39088),
      "sitio_web": "estadiumatenas.com",
      "fundado": "30 de julio de 2004"
    },
    {
      "nombre": "Estadio Olímpico de Múnich",
      "ubicacion": "Munich, alemania",
      "aforo": NumberInt(63062),
      "sitio_web": "estadiumolimpicomunich.com",
      "fundado": "26 de mayo de 1972"
    },
    {
      "nombre": "Estadio Krestovski",
      "ubicacion": "San Petersburgo, Rusia",
      "aforo": NumberInt(70000),
      "sitio_web": "estadiumKrestovski.com",
      "fundado": "22 de abril de 2017"
    },
    {
      "nombre": "Estadio Santiago Bernabéu",
      "ubicacion": "Madrid, España",
      "aforo": NumberInt(81044),
      "sitio_web": "estadiumbernabeu.com",
      "fundado": "14 de diciembre de 1947"
    },
    {
      "nombre": "Estadio Camp Nou",
      "ubicacion": "Barcelona, España",
      "aforo": NumberInt(99354),
      "sitio_web": "estadiumcampnou.com",
      "fundado": "24 de septiembre de 1957"
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
      { nombre: "a", Posicion: NumberInt(1), Equipo: "Chelsea", PG: NumberInt(2), PE: NumberInt(0), PP: NumberInt(0), GF: NumberInt(2), GC: NumberInt(0), GD: NumberInt(2), Puntos: NumberInt(6) },
      { nombre: "a", Posicion: NumberInt(2), Equipo: "Atlético de Madrid ", PG: NumberInt(1), PE: NumberInt(1), PP: NumberInt(0), GF: NumberInt(1), GC: NumberInt(0), GD: NumberInt(1), Puntos: NumberInt(4) },
      { nombre: "a", Posicion: NumberInt(3), Equipo: "Bayern de Múnich", PG: NumberInt(0), PE: NumberInt(1), PP: NumberInt(1), GF: NumberInt(0), GC: NumberInt(1), GD: NumberInt(-1), Puntos: NumberInt(1) },
      { nombre: "a", Posicion: NumberInt(4), Equipo: "Barcelona", PG: NumberInt(0), PE: NumberInt(0), PP: NumberInt(2), GF: NumberInt(0), GC: NumberInt(2), GD: NumberInt(-2), Puntos: NumberInt(0) },
      { nombre: "b", Posicion: NumberInt(1), Equipo: "Nápoles", PG: NumberInt(1), PE: NumberInt(1), PP: NumberInt(0), GF: NumberInt(1), GC: NumberInt(0), GD: NumberInt(1), Puntos: NumberInt(4) },
      { nombre: "b", Posicion: NumberInt(2), Equipo: "Manchester United", PG: NumberInt(1), PE: NumberInt(0), PP: NumberInt(1), GF: NumberInt(1), GC: NumberInt(1), GD: NumberInt(0), Puntos: NumberInt(3) },
      { nombre: "b", Posicion: NumberInt(3), Equipo: "Liverpool", PG: NumberInt(0), PE: NumberInt(2), PP: NumberInt(0), GF: NumberInt(0), GC: NumberInt(0), GD: NumberInt(0), Puntos: NumberInt(2) },
      { nombre: "b", Posicion: NumberInt(4), Equipo: "Manchester City", PG: NumberInt(0), PE: NumberInt(1), PP: NumberInt(1), GF: NumberInt(0), GC: NumberInt(1), GD: NumberInt(-1), Puntos: NumberInt(1) },
      { nombre: "c", Posicion: NumberInt(1), Equipo: "Tottenham", PG: NumberInt(1), PE: NumberInt(1), PP: NumberInt(0), GF: NumberInt(2), GC: NumberInt(0), GD: NumberInt(2), Puntos: NumberInt(4) },
      { nombre: "c", Posicion: NumberInt(2), Equipo: "PSG", PG: NumberInt(1), PE: NumberInt(1), PP: NumberInt(0), GF: NumberInt(1), GC: NumberInt(0), GD: NumberInt(1), Puntos: NumberInt(4) },
      { nombre: "c", Posicion: NumberInt(3), Equipo: "Piemonte Calcio", PG: NumberInt(0), PE: NumberInt(2), PP: NumberInt(0), GF: NumberInt(0), GC: NumberInt(0), GD: NumberInt(0), Puntos: NumberInt(2) },
      { nombre: "c", Posicion: NumberInt(4), Equipo: "Real Madrid", PG: NumberInt(0), PE: NumberInt(1), PP: NumberInt(1), GF: NumberInt(0), GC: NumberInt(1), GD: NumberInt(-1), Puntos: NumberInt(1) }
    ]
  }]
});