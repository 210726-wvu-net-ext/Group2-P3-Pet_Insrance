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
        [Fact]
        public void AddUser_ReturnsNull()
        {
            //arrange
            User testUser = new()
            {
                Id = 0,
                FirstName = "Bob",
                LastName = "McTest",
                UserName = "BobTheTester",
                Password = "CanWeTestIt",
                DoB = "1999/12/07",
                Location = "Hawaii",
                PhoneNumber = "2101024321",
                Email = "BobTheTester@aol.com",
            };

            var userRepo = new Mock<IUser>();
            userRepo.Setup(x => x.AddUser()).Reutrns();
            

            //act
            


            //assert
            userRepo.Verify(r => r.AddUser(testUser));
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