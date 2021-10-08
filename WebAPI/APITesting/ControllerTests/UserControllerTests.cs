using Xunit;
using WebAPI.Controllers;
using Moq;
using System.Threading.Tasks;
using WebAPI.Repositories.Interfaces;


namespace APITesting.ControllerTests
{
    public class UserControllerTests
    {
        private readonly Mock<IUser> _repo;
        private readonly UsersController _controller;

        public UserControllerTests()
        {
            _repo = new Mock<IUser>();
            _controller = new UsersController(_repo.Object);
        }

        [Fact]
        public void GetUser_TestIfType_Task()
        {
            var result = _controller.GetUser(1);

            Assert.IsAssignableFrom<Task>(result);

        }
    }
}