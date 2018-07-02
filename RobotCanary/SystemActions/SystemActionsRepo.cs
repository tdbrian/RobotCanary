using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using FlaskStudio.ExternalServices.Okta;

namespace FlaskStudio.Users
{
    public class SystemActionsRepo
    {
        private IMongoCollection<SystemActionEntity> SystemActionsCollection;

        public SystemActionsRepo(IMongoDatabase mongoDb, IAuthUserManager authUserManager)
        {
            SystemActionsCollection = mongoDb.GetCollection<SystemActionEntity>("systemActions");
        }

        public List<SystemActionEntity> GetAll(Guid organizationId)
        {
            return SystemActionsCollection.AsQueryable()
                .Where(u => u.OrganizationId == organizationId)
                .ToList();
        }

        public async Task Create(SystemActionEntity systemAction)
        {
            await SystemActionsCollection.InsertOneAsync(systemAction);
        }

        public async Task Update(SystemActionEntity systemAction)
        {
            var filter = Builders<SystemActionEntity>.Filter.Eq(_ => _.Id, systemAction.Id);
            var update = Builders<SystemActionEntity>.Update
                .Set(_ => _.Name, systemAction.Name)
                .Set(_ => _.DomainTags, systemAction.DomainTags);

            await SystemActionsCollection.UpdateOneAsync(filter, update);
        }

        public async Task Delete(List<Guid> deleteIds)
        {
            var filter = Builders<SystemActionEntity>.Filter.In(_ => _.Id, deleteIds);
            await SystemActionsCollection.DeleteManyAsync(filter);
        }
    }
}
