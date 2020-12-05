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
            return Ok(await db.GetAllPlantillas());
        }

       
    }
}
