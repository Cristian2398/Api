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
    public class EstadiosCollection : IEstadiosCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Estadios> Collection;
        public EstadiosCollection()
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Estadios>("estadios");

        }
        public async Task DeleteEstadios(string id)
        {
            //creamos el filtro, luego le pedimos a la coleccion que borre uno
            var filter = Builders<Estadios>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Estadios>> GetAllEstadios()
        {
            
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }
       

        public async Task<Estadios> GetEstadiosById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertEstadios(Estadios estadios)
        {
            await Collection.InsertOneAsync(estadios);
        }

        public async Task UpdateEstadios(Estadios estadios)
        {
            var filter = Builders<Estadios>.Filter.Eq(s => s.Id, estadios.Id);
            await Collection.ReplaceOneAsync(filter, estadios);
        }
    }
}
