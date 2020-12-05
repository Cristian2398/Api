using Api.Models;
using Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class JugadoresController : Controller
    {
        private IJugadoresCollections db = new JugadoresCollection();
        public async Task<IActionResult> GetAllJugador()
        {
            return Ok(await db.GetAllJugador());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllJugadorDetails(string id)
        {
            return Ok(await db.GetJugadorById(id));

        }
        [HttpPost]
        public async Task<IActionResult> CreateJugador([FromBody] Jugadores jugadores)
        {
            if (jugadores == null)
                return BadRequest();

            if (jugadores.nombre == string.Empty)
            {
                ModelState.AddModelError("Name", "El Jugador no esta");

            }
            await db.InsertJugador(jugadores);
            return Created("created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateJugador([FromBody] Jugadores jugadores, string id)
        {
            if (jugadores == null)
                return BadRequest();

            if (jugadores.nombre == string.Empty)
            {
                ModelState.AddModelError("Name", "El jugador no esta");

            }
            jugadores.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateJugador(jugadores);
            return Created("created", true);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteJugador(string id)
        {
            await db.DeleteJugador(id);
            return NoContent();//success
        }
    }
}
