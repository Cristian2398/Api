using Api.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public class EquipoCollection : IEquiposCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Equipo> Collection;
        public EquipoCollection()
        {
            Collection = _repository.db.GetCollection<Equipo>("Equipos");
        }
        public Task DeleteEquipo(string id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Equipo>> GetAllEquipos()
        {
            throw new NotImplementedException();
        }

        public Task<Equipo> GetEquipoById(string id)
        {
            throw new NotImplementedException();
        }

        public Task InsertEquipo(Equipo equipo)
        {
            throw new NotImplementedException();
        }

        public Task UpdateEquipo(Equipo equipo)
        {
            throw new NotImplementedException();
        }
    }
}
