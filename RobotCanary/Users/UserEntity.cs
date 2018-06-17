using Dapper.Contrib.Extensions;
using System.ComponentModel.DataAnnotations;

namespace RobotCanary.Users
{
    [Table("Users")]
    public class UserEntity
    {
        [Dapper.Contrib.Extensions.Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(245)]
        public string Email { get; set; }

        [MaxLength(245)]
        public string FirstName { get; set; }

        [MaxLength(245)]
        public string LastName { get; set; }

        public bool Active { get; set; }

        public bool EmailVerified { get; set; }
    }
}
