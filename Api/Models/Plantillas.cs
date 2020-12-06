using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Plantillas
    {

        [BsonId]
        public ObjectId Id { get; set; }
        public string nombre_eq { get; set; }
        public string edicion_torneo { get; set; }
        public string fase { get; set; }
        public string grupo { get; set; }
        public List<Jugadores> jugadores { get; set; }
 
    }

}
