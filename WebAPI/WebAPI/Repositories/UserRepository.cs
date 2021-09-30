using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Repositories.Interfaces;

namespace WebAPI.Repositories
{
    public class UserRepository : IUser
    {
        private readonly Entities.petinsuranceContext _context;
        public UserRepository(Entities.petinsuranceContext context)
        {
            _context = context;
        }

        public User AddUser(User user)
        {
            if(GetUserByEmail(user.Email) != null && GetUserByUsername(user.UserName) != null)
            {
                return null;
            }
            _context.Users.Add(
                new Entities.User
                {
                     
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    Password = user.Password,
                    DoB = user.DoB,
                    Location = user.Location,
                    PhoneNumber = user.PhoneNumber,
                    Email = user.Email,
                }
            );

            _context.SaveChanges();
            User newUser = GetUserByEmail(user.Email);
            return user;
        }

        /// <summary>
        /// Could use some refactoring, Right now it checks both username and password, not realistic for a login
        /// </summary>
        /// <param name="attempt"></param>
        /// <returns></returns>
        public User CheckUserCreds(User attempt)
        {
            User user = GetUserByEmail(attempt.Email);
            if (user.Email == attempt.Email && user.Password == attempt.Password)
            {
                User foundUser = new User(user.Id, user.FirstName, user.LastName, user.UserName, user.Password, user.DoB, user.Location, user.PhoneNumber,user.Email);
                return foundUser;
            }
            user = GetUserByUsername(attempt.UserName);
            if (user.UserName == attempt.UserName && user.Password == attempt.Password)
            {
                User foundUser = new User(user.Id, user.FirstName, user.LastName, user.UserName, user.Password, user.DoB, user.Location, user.PhoneNumber, user.Email);
                return foundUser;
            }
            else return null;
        }

        public User GetUserByUsername(string userName)
        {
            var search = _context.Users.FirstOrDefault(u => u.UserName == userName);
            if (search != null)
            {
                User newUser = new User(search.Id, search.FirstName, search.LastName, search.UserName, search.Password, search.DoB, search.Location, search.PhoneNumber, search.Email);
                return newUser;
            }
            else
            {
                return null;
            }
        }

        public string DeleteUser(User user)
        {

            var search = _context.Users.FirstOrDefault(u => u.Email == user.Email && u.Id == user.Id);
            if(search == null)
            {
                return "User not found";
            }
            _context.Remove(search);
            _context.SaveChangesAsync();
            return "User has been deleted";

        }
        public User GetUserByEmail(string email)
        {
            var search = _context.Users.FirstOrDefault(u => u.Email == email);
            if (search != null)
            {
                User newUser = new User(search.Id, search.FirstName, search.LastName, search.UserName, search.Password, search.DoB, search.Location, search.PhoneNumber, search.Email);
                return newUser;
            }
            else
            {
                return null;
            }
        }

        public User GetUserById(int id)
        {
            var found = _context.Users.FirstOrDefault(n => n.Id == id);
            User user = new User(found.Id, found.FirstName, found.LastName, found.UserName, found.Password, found.DoB, found.Location, found.PhoneNumber, found.Email);
            return user;
        }

        public List<User> GetUsers()
        {
            return _context.Users
                .Select
                (n => new User(n.Id, n.FirstName, n.LastName, n.UserName, n.Password, n.DoB, n.Location, n.PhoneNumber, n.Email))
                .ToList();
        }
    }
}
