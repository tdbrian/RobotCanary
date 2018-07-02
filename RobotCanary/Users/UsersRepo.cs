using MongoDB.Driver;
using FlaskStudio.Controllers;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using FlaskStudio.ExternalServices.Okta;

namespace FlaskStudio.Users
{
    public class UsersRepo
    {
        private IMongoCollection<UserEntity> usersCollection;
        private readonly IAuthUserManager authUserManager;

        public UsersRepo(IMongoDatabase mongoDb, IAuthUserManager authUserManager)
        {
            usersCollection = mongoDb.GetCollection<UserEntity>("users");
            this.authUserManager = authUserManager;
        }

        public List<UserEntity> GetOrganizationAll(Guid organizationId)
        {
            return usersCollection.AsQueryable()
                .Where(u => u.IsActive && u.OrganizationId == organizationId)
                .ToList();
        }

        public UserEntity GetByEmail(string email, Guid organizationId)
        {
            return usersCollection.AsQueryable()
                .Where(u => u.IsActive && u.OrganizationId == organizationId && u.Email == email)
                .FirstOrDefault();
        }

        public async Task RegisterAdmin(RegisterUserRequest registerUser)
        {
            var user = registerUser.User;
            await authUserManager.AddUser(user, registerUser.Password);

            user.EmailVerified = false;
            user.IsActive = false;

            await usersCollection.InsertOneAsync(user);
        }
    }
}
