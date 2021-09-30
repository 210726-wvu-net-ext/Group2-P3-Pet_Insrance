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
        public Pet AddPet(Pet pet)
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



        public Pet DeletePet(Pet pet)
        {
            try
            {
                _context.Pets.Remove(_context.Pets.FirstOrDefault(s => s.Id == pet.Id));
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            finally
            {
                _context.SaveChangesAsync();
            }
            return pet;
        }



        public Pet GetPetById(int id)
        {
            var get = _context.Pets.FirstOrDefault(s => s.Id == id);
            if(get != null)
            {
                Pet pet = new Pet(get.Id, get.Breed, get.Age, get.Location, get.InsurancePlan, get.InsuranceMonthly, get.UserId);
                return pet;
            }

            return null;
        }

        public List<Pet> GetPetsByUserId(int id)
        {
            List<Pet> list = _context.Pets.Where(p => p.UserId == id).Select(x => new Pet(x.Id, x.Breed, x.Age, x.Location, x.InsurancePlan, x.InsuranceMonthly, x.UserId)).ToList();
            return list;
        }

        public Pet UpdatePet(Pet pet)
        {
            Pet original = GetPetById(pet.Id);
            original.Breed = pet.Breed;
            original.Age = pet.Age;
            original.Location = pet.Location;
            original.InsurancePlan = pet.InsurancePlan;
            original.InsuranceMonthly = pet.InsuranceMonthly;
            original.UserId = pet.UserId;
            _context.SaveChangesAsync();
            return GetPetById(original.Id);
        }

        public string CalculateInsurance(Pet pet)
        {
            throw new NotImplementedException();
        }
    }
}
