using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FlaskStudio.Users;
using System.Linq;
using System.Threading.Tasks;
using System;

namespace FlaskStudio.Controllers
{
    [Route("api/v1/user")]
    public class UsersController : Controller
    {
        private readonly UsersRepo usersRepo;

        public UsersController(UsersRepo usersRepo)
        {
            this.usersRepo = usersRepo;
        }

        [HttpGet("organization/{organizationId}")]
        public ActionResult<List<UserEntity>> GetByOrganization(Guid organizationId)
        {
            var users = usersRepo.GetOrganizationAll(organizationId).ToList();
            return users;
        }

        [HttpGet("email/{email}")]
        [ProducesResponseType(404)]
        public ActionResult<UserEntity> GetByEmail(string email, Guid organizationId)
        {
            if (string.IsNullOrEmpty(email)) return ValidationProblem();
            var user = usersRepo.GetByEmail(email, organizationId);
            return user;
        }

        [HttpPost("register")]
        public async Task PostAsync([FromBody] RegisterUserRequest registerUser)
        {
            await usersRepo.RegisterAdmin(registerUser);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}
