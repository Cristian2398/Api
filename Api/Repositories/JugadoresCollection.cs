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
    public class JugadoresCollection : IJugadoresCollections
    {
        internal MongoRepository _repository = new MongoRepository();
        private IMongoCollection<Jugadores> Collection;
        public JugadoresCollection() 
        {
            //Va a traer los datos de la colleccion y los va a guardar en coleccion para interactuar con ella
            Collection = _repository.db.GetCollection<Jugadores>("jugadores");

        }
        public async Task DeleteJugador (string id)
        {
            //creamos el filtro, luego le pedimos a la coleccion que borre uno
            var filter = Builders<Jugadores>.Filter.Eq(s => s.Id, new ObjectId(id));
            await Collection.DeleteOneAsync(filter);
        }

        public async Task<List<Jugadores>> GetAllJugador()
        {
            
            return await Collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }
       

        public async Task<Jugadores> GetJugadorById(string id)
        {
            return await Collection.FindAsync(new BsonDocument { { "_id", new ObjectId(id) } }).Result.FirstAsync();
        }

        public async Task InsertJugador(Jugadores jugadores)
        {
            await Collection.InsertOneAsync(jugadores);
        }

        public async Task UpdateJugador(Jugadores jugadores)
        {
            var filter = Builders<Jugadores>.Filter.Eq(s => s.Id, jugadores.Id);
            await Collection.ReplaceOneAsync(filter, jugadores);
        }
    }
}
