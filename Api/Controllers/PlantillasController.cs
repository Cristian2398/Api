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
    public class PlantillasController : Controller
    {
        private IPlantillasCollection db = new PlantillasCollection();
        public async Task<IActionResult> GetAllPlatillas()
        {
            return Ok(await db.GetAllPlatillas());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllPlatillasDetails(string id)
        {
            return Ok(await db.GetPlatillasById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePlatillas([FromBody] Plantillas plantillas)
        {
            if (plantillas == null)
                return BadRequest();

            if (plantillas.nombre_eq == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            await db.InsertEquipo(plantillas);
            return Created("created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePlatillas([FromBody] Plantillas plantillas, string id)
        {
            if (plantillas == null)
                return BadRequest();

            if (plantillas.nombre_eq == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            plantillas.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateEquipo(plantillas);
            return Created("created", true);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlatillas(string id)
        {
            await db.DeleteEquipo(id);
            return NoContent();//success
        }
    }
}
