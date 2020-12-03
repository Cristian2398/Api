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

        public string Name { get; set; }
        
        public string Edad { get; set; }
        

    }
}
