using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface IEquiposCollections
    {
        Task InsertEquipo(Equipo equipo);
        Task UpdateEquipo(Equipo equipo);
        Task DeleteEquipo(string id);

        Task<List<Equipo>> GetAllEquipos();
        Task<Equipo> GetEquipoById(string id);
    }
}
