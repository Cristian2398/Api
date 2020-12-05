using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Jugadores
    {

        [BsonId]
        public ObjectId Id { get; set; }
        public string nombre { get; set; }
        public int n_camiseta {get; set;}
        public int altura { get; set; }
        public int edad { get; set; }

    }
}
