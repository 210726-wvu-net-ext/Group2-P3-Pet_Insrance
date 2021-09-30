using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories.Interfaces
{
    public interface IUser
    {
        List<User> GetUsers();
        User AddUser(User user);
        string DeleteUser(User user);
        User GetUserById(int id);
        User GetUserByEmail(string email);

        User GetUserByUsername(string userName);

        //User UpdateUser(User user);     might not need.



        // this has to do with logging in
        User CheckUserCreds(User attempt);




    }
}
