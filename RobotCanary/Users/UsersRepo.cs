using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using RobotCanary.Controllers;
using RobotCanary.ExternalServices.Okta;
using RobotCanary.Utilities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RobotCanary.Users
{
    public class UsersRepo
    {
        private readonly string connString;
        private readonly IAuthUserManager authUserManager;

        public UsersRepo(IConfiguration config, IAuthUserManager authUserManager)
        {
            connString = config.GetConnectionString(RobotCanaeryDatabase.Name);
            this.authUserManager = authUserManager;
        }

        public ICollection<UserEntity> GetOrganizationAll(int organizationId)
        {
            using (MySqlConnection conn = new MySqlConnection(connString))
            {
                var users = conn.Query<UserEntity>("select * from users where Active < 1 and OrganizationId = @OrganizationId", new { OrganizationId = organizationId });
                return users.ToList();
            }
        }

        public bool TryGetByEmail(string email, out UserEntity user)
        {
            using (MySqlConnection conn = new MySqlConnection(connString))
            {
                var usersResult = conn.Query<UserEntity>("select * from users where Active < 1 and Email = @Email", new { Email = email });
                if (!usersResult.Any())
                {
                    user = null;
                    return false;
                }
                user = usersResult.FirstOrDefault();
                return true;
            }
        }

        public async Task RegisterAdmin(RegisterUserRequest registerUser)
        {
            var user = registerUser.User;
            await authUserManager.AddUser(user, registerUser.Password);

            user.EmailVerified = false;
            user.Active = false;
            using (MySqlConnection conn = new MySqlConnection(connString))
            {
                conn.Insert(user);
            }
        }
    }
}
