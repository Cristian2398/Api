using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface IEstadiosCollections
    {
        Task InsertEstadios(Estadios estadios);
        Task UpdateEstadios(Estadios estadios);
        Task DeleteEstadios(string id);

        Task<List<Estadios>> GetAllEstadios();
        Task<Estadios> GetEstadiosById(string id);
    }
}
