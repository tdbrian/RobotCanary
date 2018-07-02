using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using FlaskStudio.Users;
using System.Threading.Tasks;
using System;

namespace FlaskStudio.Controllers
{
    [Route("api/v1/systemActions")]
    public class SystemActionsController : Controller
    {
        private readonly SystemActionsRepo systemActionsRepo;

        public SystemActionsController(SystemActionsRepo systemActionsRepo)
        {
            this.systemActionsRepo = systemActionsRepo;
        }

        [HttpGet("organization/{organizationId}")]
        public ActionResult<List<SystemActionEntity>> GetOrganizationAll(Guid organizationId)
        {
            var systemActions = systemActionsRepo.GetAll(organizationId);
            return systemActions;
        }

        [HttpPost]
        public async Task Post([FromBody] SystemActionEntity systemAction)
        {
            await systemActionsRepo.Create(systemAction);
        }

        [HttpPut]
        public async Task Put([FromBody] SystemActionEntity systemAction)
        {
            await systemActionsRepo.Update(systemAction);
        }

        [HttpPost("delete")]
        public async Task Delete([FromBody] List<Guid> ids)
        {
            await systemActionsRepo.Delete(ids);
        }
    }
}
