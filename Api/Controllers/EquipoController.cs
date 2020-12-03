﻿using Api.Models;
using Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class EquipoController : Controller
    {
        private IEquiposCollections db=new EquipoCollection();
        public async Task<IActionResult> GetAllEquipos()
        {
            return Ok(await db.GetAllEquipos());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllEquiposDetails(string id)
        {
            return Ok(await db.GetEquipoById(id));

        }
        [HttpPost]
        public async Task<IActionResult> CreateEquipo([FromBody] Equipo equipo)
        {
            if (equipo == null)
                return BadRequest();

            if (equipo.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
            await db.InsertEquipo(equipo);
            return Created("created",true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEquipo([FromBody] Equipo equipo, string id)
        {
            if (equipo == null)
                return BadRequest();

            if (equipo.Name == string.Empty)
            {
                ModelState.AddModelError("Name", "El equipo no esta");

            }
 
            await db.InsertEquipo(equipo);
            return Created("created", true);
        }
        [HttpDelete]
        public async Task<IActionResult>DeleteEquipo(string id)
        {
            await db.DeleteEquipo(id);
            return NoContent();//success
        }
    }
}