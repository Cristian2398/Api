/*------------ CREAR BASE DE DATOS -----------------*/
/*------------- Y LAS COLECCIONES-------------------*/

use torneo_futbol;  
db.createCollection("torneo", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["edicion", "fases"],
            "additionalProperties": false,
            properties: {
                _id: { bsonType: "objectId" },
                "edicion": { bsonType: "string" },
                "fases": {
                    bsonType: ["array"],
                    minItems: 1,
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: ["object"],
                        additionalProperties: false,
                        properties: {
                            nombre: { bsonType: "string" },
                            grupos: {
                                bsonType: ["array"],
                                minItems: 1,
                                uniqueItems: true,
                                additionalProperties: false,
                                items: {
                                    bsonType: ["object"],
                                    additionalProperties: false,
                                    properties: {
                                        nombre: { bsonType: "string" },
                                        Posicion: { bsonType: "int" },
                                        Equipo: { bsonType: "string" },
                                        PG: { bsonType: "int" },
                                        PE: { bsonType: "int" },
                                        PP: { bsonType: "int" },
                                        GF: { bsonType: "int" },
                                        GC: { bsonType: "int" },
                                        GD: { bsonType: "int" },
                                        Puntos: { bsonType: "int" }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }
    }
});

db.createCollection("partidos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["equipoLocal", "equipoVisitante"],
            properties: {
                _id: { bsonType: "objectId" },
                "inicio": { bsonType: "string" },
                "fin": { bsonType: "string" },
                "torneo": { bsonType: "string" },
                "fase": { bsonType: "string" },
                "grupo": { bsonType: "string" },
                "estadio": { bsonType: "string" },
                "ubicacion": { bsonType: "string" },
                "arbitros": {
                    bsonType: "object",
                    properties: {
                        "principal": { bsonType: "string" },
                        "linea": { bsonType: "string" },
                        "var": { bsonType: "string" }
                    }
                },
                "equipoLocal": {
                    bsonType: "object",
                    properties: {
                        "nombre": { bsonType: "string" },
                        "plantilla": {
                            bsonType: ["array"],
                            minItems: 1,
                            uniqueItems: true,
                            additionalProperties: false,
                            items: {
                                bsonType: ["string"]
                            }
                        }
                    }
                },
                "equipoVisitante": {
                    bsonType: "object",
                    properties: {
                        "nombre": { bsonType: "string" },
                        "plantilla": {
                            bsonType: ["array"],
                            minItems: 1,
                            uniqueItems: true,
                            additionalProperties: false,
                            items: {
                                bsonType: ["string"]
                            }
                        }
                    }
                },
                "incidencias": {
                    bsonType: ["array"],
                    minItems: 1,
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: ["object"],
                        properties: {
                            "nombre_equipo": { bsonType: "string" },
                            "jugador": { bsonType: "string" },
                            "minuto": { bsonType: "int" },
                            "tipo_incidencia": { bsonType: "string" },
                            "detalles": { bsonType: ["string", "int"] }
                        }
                    }
                }

            }
        }
    }
});

db.createCollection("equipos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre_eq", "entrenador", "sitio_web", "email", "fundado"],
            "additionalProperties": false,
            properties: {
                _id: { bsonType: "objectId" },
                "nombre_eq": { bsonType: "string" },
                "entrenador": { bsonType: "string" },
                "sitio_web": { bsonType: "string" },
                "email": { bsonType: "string" },
                "fundado": { bsonType: "string" }
            }
        }
    }
});

db.createCollection("plantillas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre_eq", "edicion_torneo", "fase", "grupo", "jugadores"],
            "additionalProperties": false,
            properties: {
                "_id": { bsonType: "objectId" },
                "nombre_eq": { bsonType: "string" },
                "edicion_torneo": { bsonType: "string" },
                "fase": { bsonType: "string" },
                "grupo": { bsonType: "string" },
                "jugadores": {
                    bsonType: ["array"],
                    minItems: 1,
                    uniqueItems: true,
                    items: {
                        bsonType: ["object"],
                        required: ["nombre", "n_camiseta", "altura", "edad"],
                        properties: {
                            "nombre": { bsonType: "string" },
                            "n_camiseta": { bsonType: "int" },
                            "altura": { bsonType: "int" },
                            "edad": { bsonType: "int" }
                        }
                    }
                }
            }
        }
    }
})

db.createCollection("estadios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "ubicacion", "aforo", "sitio_web", "fundado"],
            "additionalProperties": false,
            properties: {
                _id: { bsonType: "objectId" },
                "nombre": { bsonType: "string" },
                "ubicacion": { bsonType: "string" },    
                "aforo": { bsonType: "int" },
                "sitio_web": { bsonType: "string" },
                "fundado": { bsonType: "string" }
                  
            }
        }
    }
});

db.createCollection("jugadores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "n_camiseta", "altura", "edad"],
            "additionalProperties": false,
            properties: {
                _id: { bsonType: "objectId" },
                "nombre": { bsonType: "string" },
                "n_camiseta": { bsonType: "int" },
                "altura": { bsonType: "int" },
                "edad": { bsonType: "int" }
            }
        }
    }
});