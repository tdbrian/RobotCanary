using Okta.Sdk;
using FlaskStudio.Users;
using System.Threading.Tasks;

namespace FlaskStudio.ExternalServices.Okta
{
    public class OktaUserManager : IAuthUserManager
    {
        private readonly OktaClient client;

        public OktaUserManager(OktaClient client)
        {
            this.client = client;
        }

        public async Task AddUser(UserEntity user, string password)
        {
            var vader = await client.Users.CreateUserAsync(

            new CreateUserWithPasswordOptions
            {
                Profile = new UserProfile
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Login = user.Email,
                },
                Password = password,
                Activate = false,
            });
        }
    }
}
