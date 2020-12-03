using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    public class EquipoCollection : IEquiposCollections
    {
        public Task DeleteEquipo(string id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Equipo>> GetAllEquipos()
        {
            throw new NotImplementedException();
        }

        public Task<Equipo> GetEquipoById(string id)
        {
            throw new NotImplementedException();
        }

        public Task InsertEquipo(Equipo equipo)
        {
            throw new NotImplementedException();
        }

        public Task UpdateEquipo(Equipo equipo)
        {
            throw new NotImplementedException();
        }
    }
}
