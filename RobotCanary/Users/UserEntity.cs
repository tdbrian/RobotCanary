using System;
using System.ComponentModel.DataAnnotations;

namespace FlaskStudio.Users
{
    public class UserEntity
    {
        public Guid Id { get; set; }

        [Required]
        public string Email { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public bool IsActive { get; set; }

        public bool EmailVerified { get; set; }

        [Required]
        public Guid OrganizationId { get; set; }
    }
}
