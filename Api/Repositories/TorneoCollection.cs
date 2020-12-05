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
    public class TorneoCollection : ITorneoCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Torneo> Collection;
        public TorneoCollection()
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Torneo>("torneo");

        }
        public async Task DeleteTorneo(string id)
        {
            //creamos el filtro, luego le pedimos a la coleccion que borre uno
            var filter = Builders<Torneo>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Torneo>> GetAllTorneos()
        {
            
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }
       

        public async Task<Torneo> GetTorneoById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertTorneo(Torneo torneo)
        {
            await Collection.InsertOneAsync(torneo);
        }

        public async Task UpdateTorneo(Torneo torneo)
        {
            var filter = Builders<Torneo>.Filter.Eq(s => s.Id, torneo.Id);
            await Collection.ReplaceOneAsync(filter, torneo);
        }
    }
}
