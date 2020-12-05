using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Estadios
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string nombre { get; set; }
        public string ubicacion { get; set; }
        public int aforo { get; set; }
        public string sitio_web { get; set; }
        public string fundado { get; set; }
       
    }
}
