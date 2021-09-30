using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Repositories.Interfaces;

namespace WebAPI.Repositories
{
    public class PetRepository : IPet
    {
        private readonly Entities.petinsuranceContext _context;

        public PetRepository(Entities.petinsuranceContext context)
        {
            _context = context;
        }
        public Task<Pet> AddPet(Pet pet)
        {
            _context.Pets.AddAsync(
                new Entities.Pet
                {
                    Breed = pet.Breed,
                    Age = pet.Age,
                    Location = pet.Location,
                    InsurancePlan = pet.InsurancePlan,
                    InsuranceMonthly = pet.InsuranceMonthly,
                    UserId = pet.UserId,

                });
            _context.SaveChangesAsync();
            return pet;
        }



        public async Task<bool> DeletePet(Pet pet)
        {                
            var attempt = _context.Remove(_context.Pets.FirstOrDefault(s => s.Id == pet.Id));
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }
            return false;
        }



        public async Task<Pet> GetPetById(int id)
        {
            var get = await _context.Pets.FirstOrDefaultAsync(s => s.Id == id);
            if(get != null)
            {
                Pet pet = new Pet(get.Id, get.Breed, get.Age, get.Location, get.InsurancePlan, get.InsuranceMonthly, get.UserId);
                return pet;
            }

            return null;
        }

        public Task<List<Pet>> GetPetsByUserId(int id)
        {
            Task<List<Pet>> list = _context.Pets.Where(p => p.UserId == id).Select(x => new Pet(x.Id, x.Breed, x.Age, x.Location, x.InsurancePlan, x.InsuranceMonthly, x.UserId)).ToListAsync();
            return list;
        }

        public async Task<Pet> UpdatePet(Pet pet)
        {
            Task<Pet> original = GetPetById(pet.Id);
            original.Result.Breed = pet.Breed;
            original.Result.Age = pet.Age;
            original.Result.Location = pet.Location;
            original.Result.InsurancePlan = pet.InsurancePlan;
            original.Result.InsuranceMonthly = pet.InsuranceMonthly;
            original.Result.UserId = pet.UserId;
            await _context.SaveChangesAsync();
            return pet;
        }

        public Task<string> CalculateInsurance(Pet pet)
        {
            throw new NotImplementedException();
        }
    }
}
