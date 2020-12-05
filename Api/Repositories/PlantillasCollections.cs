using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public class PlantillasCollections
    {
        public ObjectId Id { get; set; }
        public string nombre_eq { get; set; }
        public string edicion_torneo { get; set; }
        public string fase { get; set; }
        public string grupo { get; set; }
        public Object jugadores { get; set; }
    }
}
