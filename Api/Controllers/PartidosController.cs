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
    public class PartidosController : Controller
    {
        private IPartidosCollections db = new PartidosCollection();

        public async Task<IActionResult> GetAllEquipos() {
            var listPartidos = await db.GetAllPartido();
            Console.WriteLine("");
            //Console.WriteLine("xxxxxxxxxxxxxxxxxxxxxx");

            dynamic eod = listPartidos[0].equipoLocal;
            var value = eod.nombre;

            //Console.WriteLine(value);
            

            //Console.WriteLine("----------------------");
            foreach (Partidos itemPartido in listPartidos){
                //Console.WriteLine(itemPartido);
            }
            //Console.WriteLine("vvvvvvvvvvvvvvvvvvvvvv");

            return Ok(await db.GetAllPartido());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllPartidosDetails(string id)
        {
            return Ok(await db.GetPartidoById(id));

        }



        [HttpPost]
        public async Task<IActionResult> CreatePartido([FromBody] Partidos partidos) {
            Console.WriteLine("^^^^^^^^^^^^^^^^^^^^");
            Console.WriteLine(partidos.equipoLocal.plantilla[0]);
            Console.WriteLine(partidos.incidencias[0].nombre_equipo);
            Console.WriteLine("vvvvvvvvvvvvvvvvvvvvvv");

            if (partidos == null)
                return BadRequest();

            if (partidos.grupo == string.Empty){
                ModelState.AddModelError("Name", "El Partido no esta");
            }
            await db.InsertPartido(partidos);
            return Created("created", true);
        }





        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePartido([FromBody] Partidos partidos, string id)
        {
            if (partidos == null)
                return BadRequest();

            if (partidos.grupo == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            partidos.Id = new MongoDB.Bson.ObjectId(id);
            await db.UpdatePartido(partidos);
            return Created("created", true);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteEquipo(string id)
        {
            await db.DeletePartido(id);
            return NoContent();//success
        }
    }
}
