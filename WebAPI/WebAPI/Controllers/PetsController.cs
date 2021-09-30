using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.Repositories.Interfaces;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private IPet _petRepo;

        public PetsController(IPet petRepo)
        {
            _petRepo = petRepo;
        }

        // GET: api/Pets
        [HttpGet]
        public async Task<ActionResult<Pet>> GetPets(int id)
        {
            var k = await _petRepo.GetPetsByUserId(id);
            try
            {
                if(k != null)
                {
                    return Ok(k);
                }
            }
            catch(Exception e)
            {

            }
            return NotFound("No pets by user ${id} found");
        }

        // PUT: api/Pets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<ActionResult<Pet>> PutPet(Pet pet)
        {
            var attempt  = await _petRepo.AddPet(pet);
            if(attempt != null)
            {
                return Ok(attempt);
            }
            else
            {
                return BadRequest(pet);
            }
        }

        // POST: api/Pets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pet>> PostPet(Pet pet)
        {
            Pet newPet = await _petRepo.UpdatePet(pet);
            return CreatedAtAction("Added new Pet", newPet);
        }

        // DELETE: api/Pets
        [HttpDelete]
        public async Task<IActionResult> DeletePet(Pet pet)
        {
            try
            {
                await _petRepo.DeletePet(pet);

            }
            catch (Exception e)
            {
                return BadRequest();
            }
            return Ok();
        }
    }
}
