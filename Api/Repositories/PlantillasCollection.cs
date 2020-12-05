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
    public class PlantillasCollection : IPlantillasCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Plantillas> Collection;
        public PlantillasCollection() 
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Plantillas>("plantillas");

        }

        public async Task<List<Plantillas>> GetAllPlantillas()
        {
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task<Plantillas> GetPlantillasById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertPlantillas(Plantillas plantillas)
        {
         await Collection.InsertOneAsync(plantillas);
        }

        public Task UpdatePlantillas(Plantillas plantillas)
        {
            throw new NotImplementedException();
        }

        public Task DeletePlantillas(string id)
        {
            throw new NotImplementedException();
        }

    }
}
