using System;
using Xunit;
using WebAPI.Repositories;
using Moq;
using WebAPI.Models;
using System.Threading.Tasks;
using WebAPI.Repositories.Interfaces;

namespace APITesting.RepositoriesTests
{
    public class UserRepoTests
    {
        private readonly Mock<WebAPI.Entities.petinsuranceContext> _context;

        public UserRepoTests()
        {
            _context = new Mock<WebAPI.Entities.petinsuranceContext>();
        }


        User testUser = new()
        {
            FirstName = "Bob",
            LastName = "McTest",
            UserName = "BobTheTester",
            Password = "CanWeTestIt",
            DoB = "1999/12/07",
            Location = "Hawaii",
            PhoneNumber = "2101024321",
            Email = "BobTheTester@aol.com",
        };

        [Fact]
        public void AddUser_TestIfType_Task()
        {

            var _userRepo = new UserRepository(_context.Object);
            var result = _userRepo.AddUser(testUser as User);

            Assert.IsAssignableFrom<Task>(result);
        }
    }
}
