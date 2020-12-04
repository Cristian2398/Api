using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface IPartidosCollections
    {
        Task InsertPartido(Partidos partidos);
        Task UpdatePartido(Partidos partidos);
        Task DeletePartido(string id);

        Task<List<Partidos>> GetAllPartido();
        Task<Partidos> GetPartidoById(string id);
    }
}
