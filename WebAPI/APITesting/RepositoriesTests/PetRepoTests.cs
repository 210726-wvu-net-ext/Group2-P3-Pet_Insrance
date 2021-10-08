using Xunit;
using WebAPI.Repositories;
using Moq;
using WebAPI.Models;
using System.Threading.Tasks;

namespace APITesting.RepositoriesTests
{
    public class PetRepoTests
    {
        private readonly Mock<WebAPI.Entities.petinsuranceContext> _context;

        public PetRepoTests()
        {
            _context = new Mock<WebAPI.Entities.petinsuranceContext>();
        }


        Pet testPet = new()
        {
            Breed = "Crested Gecko",
            Age = 5,
            Location = "Hawaii",
            InsurancePlan = "Gold",
            InsuranceMonthly = "Gold",
            UserId = 1
        };

        /// <summary>
        /// Tests AddPet to check if result is type Task
        /// </summary>

        [Fact]
        public void AddPet_TestIfType_Task()
        {

            var _petRepo = new PetRepository(_context.Object);
            var result = _petRepo.AddPet(testPet as Pet);

            Assert.IsAssignableFrom<Task>(result);
        }


    }
}
