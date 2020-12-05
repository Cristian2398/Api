using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface IPlantillasCollections
    {
        Task InsertPlantillas(Plantillas plantillas);
        Task UpdatePlantillas(Plantillas plantillas);
        Task DeletePlantillas(string id);

        Task<List<Plantillas>> GetAllPlantillas();
        Task<Plantillas> GetPlantillasById(string id);
    }
}
