using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Torneo
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string edicion { get; set; }
        public List<fases> fases { get; set; }
    }
    

    public class fases
    {
        public string nombre { get; set; }
        public List<grupos> grupos { get; set; }
    }


    public class grupos
    {
        public string nombre { get; set; }
        public int Posicion { get; set; }
        public string Equipo { get; set; }
        public int PG { get; set; }
        public int PE { get; set; }
        public int PP { get; set; }
        public int GF { get; set; }
        public int GC { get; set; }
        public int GD { get; set; }
        public int Puntos { get; set; }


    }
}
