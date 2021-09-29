using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Breed { get; set; }
        public decimal Age { get; set; }
        public string Location { get; set; }
        public string InsurancePlan { get; set; }
        public string InsuranceMonthly { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
