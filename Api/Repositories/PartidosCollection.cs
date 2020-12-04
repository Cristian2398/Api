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
    public class PartidosCollection : IPartidosCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Partidos> Collection;
        public PartidosCollection() 
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Partidos>("partidos");

        }
        public async Task DeletePartido (string id)
        {
            //creamos el filtro, luego le pedimos a la coleccion que borre uno
            var filter = Builders<Partidos>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Partidos>> GetAllPartido()
        {
            
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }
       

        public async Task<Partidos> GetPartidoById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertPartido(Partidos partidos)
        {
            await Collection.InsertOneAsync(partidos);
        }

        public async Task UpdatePartido(Partidos partidos)
        {
            var filter = Builders<Partidos>.Filter.Eq(s => s.Id, partidos.Id);
            await Collection.ReplaceOneAsync(filter, partidos);
        }
    }
}
