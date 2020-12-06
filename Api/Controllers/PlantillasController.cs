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
        private IPlantillasCollections db = new PlantillasCollection();

        public async Task<IActionResult> GetAllPlatillas()
        {
            
            var result = await db.GetAllPlantillas();

            foreach (Plantillas name in result)
            {
                Console.WriteLine(name.nombre_eq);
                Console.WriteLine(name.jugadores);
                

            }
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllPlantillasDetails(string id)
        {
            return Ok(await db.GetPlantillasById(id));

        }
        [HttpPost]
        public async Task<IActionResult> CreatePlantillas([FromBody] Plantillas plantillas)
        {
            if (plantillas == null)
                return BadRequest();

            if (plantillas.grupo == string.Empty)
            {
                ModelState.AddModelError("Name", "El Partido no esta");

            }
            await db.InsertPlantillas(plantillas);
            return Created("created", true);
        }


    }
}
