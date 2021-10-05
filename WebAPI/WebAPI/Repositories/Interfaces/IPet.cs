﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories.Interfaces
{
    public interface IPet
    {
        Task<Pet> AddPet(Pet pet);
        Task DeletePet(Pet pet);
        Task<Pet> GetPetById(int id);
        Task<List<Pet>> GetPetsByUserId(int id);
        Task<Pet>UpdatePet(Pet pet);
        Task<string> CalculateInsurance(Pet pet);
    }
}
