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
    public class TorneoController : Controller
    {
        private ITorneoCollections db = new TorneoCollection();
        public async Task<IActionResult> GetAllTorneo()
        {
            return Ok(await db.GetAllTorneos());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllTorneoDetails(string id)
        {
            return Ok(await db.GetTorneoById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateTorneo([FromBody] Torneo torneo)
        {
            if (torneo == null)
                return BadRequest();

            if (torneo.edicion == string.Empty)
            {
                ModelState.AddModelError("Name", "El torneo no esta");

            }
            await db.InsertTorneo(torneo);
            return Created("created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTorneo([FromBody] Torneo torneo, string id)
        {
            if (torneo == null)
                return BadRequest();

            if (torneo.edicion == string.Empty)
            {
                ModelState.AddModelError("Name", "El torneo no esta");

            }
            torneo.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateTorneo(torneo);
            return Created("created", true);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteTorneo(string id)
        {
            await db.DeleteTorneo(id);
            return NoContent();//success
        }
    }
}
