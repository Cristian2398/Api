use('torneo_futbol');
/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//1. Consultar la plantilla (jugadores) de los equipos en cada edición de los torneos.
db.plantillas.aggregate([      
    {$project:{
            "nombre_eq": 1,
            "edicion_torneo": 1,
            "jugadores": 1
        }
    }
]).pretty();

/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//2. Clasificación final en cada grupo.
torneo = 'Liga de Campeones 2020';
db.torneo.aggregate([
    { $match: { 'edicion':torneo}}
    
]).pretty();


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// 3. Toda la información de un partido filtrando por torneo y equipo.
equipo_buscar = 'Piemonte Calcio';
torneo = 'Liga de Campeones 2020';
db.partidos.aggregate([
    { $match: { $or: [{'equipoVisitante.nombre':equipo_buscar },{'equipoLocal.nombre':equipo_buscar}]}},
    { $match: { 'torneo':torneo}}
    ,{$set: 
        {'Goles Equipo Buscado':
            { $size:{$filter: {input: "$incidencias",as: "list",cond: {
                        $and:[
                            {$eq: ['$$list.nombre_equipo', equipo_buscar]},
                            {$eq: ['$$list.tipo_incidencia', "gol"]}
                        ]
                    }
                    }
                }
            },
        'Goles equipo contrario':
            { $size:{$filter: {input: "$incidencias",as: "list",cond: {
                        $and:[
                            {$ne: ['$$list.nombre_equipo', equipo_buscar]},
                            {$eq: ['$$list.tipo_incidencia', "gol"]}
                        ]
                    }
                    }
                }
            }
        }
    }
]).pretty();


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//4. Dado un jugador y un torneo ver los partidos en los que participó.
torneo = 'Liga de Campeones 2020';
jugador_buscar = 'Messi';  //falta el nombre. anidar plantilla completa
db.partidos.find({
    $and:[
        {$or:[
            {'equipoVisitante.plantilla':jugador_buscar },
            {'equipoLocal.plantilla':jugador_buscar}]},
        {'torneo':torneo},    
    ]
}).pretty();


/*- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//5. Ver la información de las incidencias de un jugador en un torneo, que incluya tipo de incidencia, minuto, equipo, etc.
torneo = 'Liga de Campeones 2020';
jugador_buscar = "Jan Vertonghen";
db.partidos.aggregate([
    {$match:{$and:[
                {$or:[
                    {'equipoVisitante.plantilla':jugador_buscar },
                    {'equipoLocal.plantilla':jugador_buscar}]},
                {'torneo':torneo},
                {'incidencias.jugador':jugador_buscar}
    ]}},
    {$group: { _id: "$incidencias" } 
    }
]).pretty();