using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using RobotCanary.Utilities;
using System.Collections.Generic;
using System.Linq;

namespace RobotCanary.Users
{
    public class UsersRepo
    {
        private readonly string connString;

        public UsersRepo(IConfiguration config)
        {
            connString = config.GetConnectionString(RobotCanaeryDatabase.Name);
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

        public void RegisterAdmin(UserEntity user, string password)
        {


            user.EmailVerified = false;
            user.Active = false;
            using (MySqlConnection conn = new MySqlConnection(connString))
            {
                conn.Insert(user);
            }
        }
    }
}
