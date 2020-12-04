using Api.Models;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Api.Repositories
{
    public class EquipoCollection : IEquiposCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Equipo> Collection;
        public EquipoCollection()
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Equipo>("equipos");

        }
        public async Task DeleteEquipo(string id)
        {
            //creamos el filtro, luego le pedimos a la coleccion que borre uno
            var filter = Builders<Equipo>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Equipo>> GetAllEquipos()
        {
            
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }
       

        public async Task<Equipo> GetEquipoById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertEquipo(Equipo equipo)
        {
            await Collection.InsertOneAsync(equipo);
        }

        public async Task UpdateEquipo(Equipo equipo)
        {
            var filter = Builders<Equipo>.Filter.Eq(s => s.Id, equipo.Id);
            await Collection.ReplaceOneAsync(filter, equipo);
        }
    }
}
