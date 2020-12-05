using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Repositories
{
    interface IJugadoresCollections
    {
        Task InsertJugador(Jugadores jugadores);
        Task UpdateJugador(Jugadores jugadores);
        Task DeleteJugador(string id);

        Task<List<Jugadores>> GetAllJugador();
        Task<Jugadores> GetJugadorById(string id);
    }
}
