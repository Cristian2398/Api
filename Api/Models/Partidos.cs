﻿using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Partidos
    {
       public ObjectId Id { get; set; }
        public string inicio { get; set; }
        public string fin { get; set; }
        public string torneo { get; set; }
        public string fase { get; set; }
        public string grupo { get; set; }
        public string estadio { get; set; }
        public string Ubicacion { get; set; }
        public Object arbitros { get; set; }
        public Object equipoLocal { get; set; }
        public Object equipoVisitante { get; set; }
        public Object incidencias { get; set; }

    }
}
