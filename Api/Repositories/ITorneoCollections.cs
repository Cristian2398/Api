using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface ITorneoCollections
    {
        Task InsertTorneo(Torneo torneo);
        Task UpdateTorneo(Torneo torneo);
        Task DeleteTorneo(string id);
        
        Task<List<Torneo>> GetAllTorneos();
        Task<Torneo> GetTorneoById(string id);
    }
}
