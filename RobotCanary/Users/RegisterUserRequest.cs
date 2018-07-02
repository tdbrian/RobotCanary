using FlaskStudio.Users;
using System.ComponentModel.DataAnnotations;

namespace FlaskStudio.Controllers
{
    public class RegisterUserRequest
    {
        [Required]
        public UserEntity User { get; set; }

        [Required]
        public string Password { get; set; }
    }
}