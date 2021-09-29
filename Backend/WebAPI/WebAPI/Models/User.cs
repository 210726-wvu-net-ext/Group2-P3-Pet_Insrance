﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string DoB { get; set; }
        public string Location { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Pet> Pets { get; set; }
    }
}
