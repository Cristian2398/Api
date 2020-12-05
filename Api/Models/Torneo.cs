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
        public string fases { get; set; }
    }
}
