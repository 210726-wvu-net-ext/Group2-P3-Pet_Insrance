using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories.Interfaces
{
    public interface IPet
    {
        Pet AddPet(Pet pet);
        Pet DeletePet(Pet pet);
        Pet GetPetById(int id);
        List<Pet> GetPetsByUserId(int id);
        Pet UpdatePet(Pet pet);
        string CalculateInsurance(Pet pet);
    }
}
