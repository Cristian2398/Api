using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Partidos
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string inicio { get; set; }
        public string fin { get; set; }
        public string torneo { get; set; }
        public string fase { get; set; }
        public string grupo { get; set; }
        public string estadio { get; set; }
        public string ubicacion { get; set; }
        public Arbitros arbitros { get; set; }
        public EquipoPartido equipoLocal { get; set; }
        public EquipoPartido equipoVisitante { get; set; }
        public List<Incidencias> incidencias { get; set; }
    }

    public class Arbitros {
        public string principal { get; set; }
        public string linea { get; set; }
        public string var { get; set; }

    }

    public class EquipoPartido {
        public string nombre { get; set; }
        public List<String> plantilla { get; set; }
    }

    public class Incidencias {
        public string nombre_equipo { get; set; }
        public string jugador { get; set; }
        public int minuto { get; set; }
        public string tipo_incidencia { get; set; }
        public string detalles { get; set; }
    }
}

