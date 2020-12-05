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
    public class EstadiosController : Controller
    {
        private IEstadiosCollections db = new EstadiosCollection();
        public async Task<IActionResult> GetAllEstadios()
        {
            return Ok(await db.GetAllEstadios());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllEstadiossDetails(string id)
        {
            return Ok(await db.GetEstadiosById(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreateEstadios([FromBody] Estadios estadios)
        {
            if (estadios == null)
                return BadRequest();

            if (estadios.nombre == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            await db.InsertEstadios(estadios);
            return Created("created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEstadios([FromBody] Estadios estadios, string id)
        {
            if (estadios == null)
                return BadRequest();

            if (estadios.nombre == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            estadios.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdateEstadios(estadios);
            return Created("created", true);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstadios(string id)
        {
            await db.DeleteEstadios(id);
            return NoContent();//success
        }
    }
}
