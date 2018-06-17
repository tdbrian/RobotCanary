using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using RobotCanary.Users;
using System.Linq;

namespace RobotCanary.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersRepo usersRepo;

        public UsersController(UsersRepo usersRepo)
        {
            this.usersRepo = usersRepo;
        }

        [HttpGet("/organization/{organizationId}")]
        public ActionResult<List<UserEntity>> GetByOrganization(int organizationId)
        {
            var users = usersRepo.GetOrganizationAll(organizationId).ToList();
            return users;
        }

        [HttpGet("email/{email}")]
        [ProducesResponseType(404)]
        public ActionResult<UserEntity> GetByEmail(string email)
        {
            if (string.IsNullOrEmpty(email)) return ValidationProblem();
            if (!usersRepo.TryGetByEmail(email, out var user)) return NotFound();
            return user;
        }

        [HttpPost]
        public void Post([FromBody] UserEntity user)
        {

        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
