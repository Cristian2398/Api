using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Equipo
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string nombre_eq { get; set; }
        public string entrenador { get; set; }
        public string sitio_web { get; set; }
        public string email { get; set; }
        public string fundado { get; set; }
    }
}
