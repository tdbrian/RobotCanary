using RobotCanary.Users;

namespace RobotCanary.Controllers
{
    public class RegisterUserRequest
    {
        public UserEntity User { get; set; }

        public string Password { get; set; }
    }
}