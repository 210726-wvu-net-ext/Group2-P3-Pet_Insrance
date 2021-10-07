using System;
using Xunit;
using WebAPI.Repositories;
using Moq;
using WebAPI.Models;
using WebAPI.Repositories.Interfaces;

namespace APITesting.RepositoriesTests
{
    public class UserRepoTests
    {
        
        private readonly UserRepository _userRepo;
        private readonly Mock<WebAPI.Entities.petinsuranceContext> _context;

        public UserRepoTests()
        {
            _context = new Mock<WebAPI.Entities.petinsuranceContext>();
            _userRepo = new UserRepository(_context.Object);
        }

            
            WebAPI.Modles.User testUser = new()
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
        public void AddUser_ReturnsNull()
        {

            var result = _userRepo.AddUser(testUser);

            Assert.IsType(null, result);
        }
    }
}

//public User AddUser(User user)
//{
//    if (GetUserById(user.Id) != null)
//    {
//        return null;
//    }
//    _context.Users.Add(
//        new Entities.User
//        {

//            FirstName = user.FirstName,
//            LastName = user.LastName,
//            UserName = user.UserName,
//            Password = user.Password,
//            DoB = user.DoB,
//            Location = user.Location,
//            PhoneNumber = user.PhoneNumber,
//            Email = user.Email,
//        }
//    );

//    _context.SaveChanges();
//    User newUser = GetUserByEmail(user.Email);
//    return user;
//}