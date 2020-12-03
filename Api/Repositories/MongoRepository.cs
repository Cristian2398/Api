using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public class MongoRepository
    {
        //Mongo client, nexo entre api y mongo
        public MongoClient client;
        // Mongo interface
        public IMongoDatabase db;
        //
        
        public MongoRepository()
        {
            client = new MongoClient("mongodb://localhost:27017");
            db = client.GetDatabase("Torneo");

        }

    }
}
